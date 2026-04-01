import styles from './SearchBar.module.css';
import { Search, XLg, ClockHistory } from 'react-bootstrap-icons';
import { useState, useRef, useCallback } from 'react';
import { mockPlants } from '../../../data/mockPlants';

/* ── tipos ── */
interface Suggestion {
  type: 'history' | 'plant';
  text: string;
  subtitle?: string;
}

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onSubmit?: (query: string) => void;
  initialValue?: string;
  /** 'glass' = glassmorphism solto | 'hero' = glassmorphism que preenche o pai | 'solid' = fundo branco */
  variant?: 'glass' | 'hero' | 'solid';
}

/* ── histórico no localStorage ── */
const HISTORY_KEY = 'herbapedia_history';
const MAX_HISTORY = 5;

function getHistory(): string[] {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]'); }
  catch { return []; }
}

function addToHistory(q: string) {
  const next = [q, ...getHistory().filter(h => h !== q)].slice(0, MAX_HISTORY);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
}

/* ── autocomplete a partir das plantas mock ── */
function getSuggestions(q: string): Suggestion[] {
  if (!q.trim()) return [];
  const lower = q.toLowerCase();
  const found: Suggestion[] = [];
  for (const plant of mockPlants) {
    if (
      plant.commonName.toLowerCase().includes(lower) ||
      plant.scientificName.toLowerCase().includes(lower) ||
      plant.properties.some(p => p.toLowerCase().includes(lower))
    ) {
      found.push({ type: 'plant', text: plant.commonName, subtitle: plant.scientificName });
    }
    if (found.length >= 6) break;
  }
  return found;
}

/* ── componente ── */
export default function SearchBar({
  onSearch,
  onSubmit,
  initialValue = '',
  variant = 'glass',
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* histórico sempre fresco (lido ao renderizar) */
  const history = getHistory();

  const submit = useCallback((value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    addToHistory(trimmed);
    setOpen(false);
    setActiveIdx(-1);
    onSubmit?.(trimmed);
  }, [onSubmit]);

  const handleChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
    setActiveIdx(-1);

    if (!value.trim()) {
      setLoading(false);
      setSuggestions([]);
      setOpen(true);           // mostra histórico
      if (debounceRef.current) clearTimeout(debounceRef.current);
      return;
    }

    setLoading(true);
    setOpen(true);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSuggestions(getSuggestions(value));
      setLoading(false);
    }, 350);
  };

  const handleFocus = () => setOpen(true);

  const handleBlur = () => {
    setTimeout(() => { setOpen(false); setActiveIdx(-1); }, 150);
  };

  const handleKeyDown = (e: { key: string; preventDefault(): void }) => {
    const items: Suggestion[] = query.trim()
      ? suggestions
      : history.map(h => ({ type: 'history' as const, text: h }));

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = activeIdx < items.length - 1 ? activeIdx + 1 : 0;
      setActiveIdx(next);
      setQuery(items[next].text);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = activeIdx > 0 ? activeIdx - 1 : items.length - 1;
      setActiveIdx(prev);
      setQuery(items[prev].text);
    } else if (e.key === 'Escape') {
      setOpen(false);
      setActiveIdx(-1);
    }
  };

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    submit(query);
  };

  const clearInput = () => {
    setQuery('');
    setSuggestions([]);
    setLoading(false);
    setActiveIdx(-1);
    setOpen(false);
    onSearch?.('');
  };

  /* o que exibir no dropdown */
  const showHistory  = open && !query.trim() && history.length > 0;
  const showResults  = open && query.trim().length > 0;
  const dropdownOpen = showHistory || showResults;

  const inputClass = [
    variant === 'solid' ? styles.solidInput : styles.transparent,
    dropdownOpen ? styles.mergeDropdown : '',
  ].join(' ');

  const containerClass = [
    styles.container,
    variant === 'solid' ? styles.containerSolid : '',
    variant === 'hero'  ? styles.containerHero  : '',
  ].join(' ');

  return (
    <form className={containerClass}
      onSubmit={handleSubmit}
      role="search"
    >
      <div className={styles.inputSearch}>
        <button className={styles.iconLeft} type="submit" aria-label="Pesquisar">
          <Search />
        </button>

        <input
          type="text"
          className={inputClass}
          placeholder="Buscar plantas, usos ou nomes científicos…"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={dropdownOpen}
        />

        {query.length > 0 && (
          <button className={styles.iconRight1} onClick={clearInput} type="button" aria-label="Limpar busca">
            <XLg />
          </button>
        )}
      </div>

      {/* ── Dropdown ── */}
      {dropdownOpen && (
        <div
          className={`${styles.suggestionsDropdown} ${variant === 'solid' ? styles.solidDropdown : ''}`}
          role="listbox"
        >
          {/* Histórico */}
          {showHistory && (
            <>
              <p className={styles.dropdownLabel}>Pesquisas recentes</p>
              <ul className={styles.suggestionsList}>
                {history.map((h, i) => (
                  <li
                    key={h}
                    className={`${styles.suggestionItem} ${activeIdx === i ? styles.active : ''}`}
                    onMouseDown={() => { setQuery(h); submit(h); }}
                    role="option"
                    aria-selected={activeIdx === i}
                  >
                    <ClockHistory className={styles.itemIcon} />
                    <span className={styles.itemText}>{h}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Shimmer (carregando) */}
          {showResults && loading && (
            <ul className={styles.suggestionsList}>
              {[60, 75, 50].map((w, i) => (
                <li key={i} className={styles.shimmerItem}>
                  <div className={styles.shimmerLine} style={{ width: `${w}%` }} />
                  <div className={styles.shimmerSub}  style={{ width: `${w - 15}%` }} />
                </li>
              ))}
            </ul>
          )}

          {/* Autocomplete */}
          {showResults && !loading && suggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {suggestions.map((s, i) => (
                <li
                  key={s.text}
                  className={`${styles.suggestionItem} ${activeIdx === i ? styles.active : ''}`}
                  onMouseDown={() => { setQuery(s.text); submit(s.text); }}
                  role="option"
                  aria-selected={activeIdx === i}
                >
                  <Search className={styles.itemIcon} />
                  <span className={styles.itemText}>
                    {s.text}
                    {s.subtitle && <em className={styles.itemSubtitle}>{s.subtitle}</em>}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Sem resultados */}
          {showResults && !loading && suggestions.length === 0 && (
            <p className={styles.noResults}>Nenhuma sugestão para "{query}"</p>
          )}
        </div>
      )}
    </form>
  );
}
