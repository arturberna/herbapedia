import { useNavigate } from 'react-router-dom';
import { Search, CardList, BookHalf } from 'react-bootstrap-icons';
import { mockPlants } from '../../../data/mockPlants';
import styles from './ContextSection.module.css';

/* ── Estatísticas derivadas dos dados reais ── */
const totalPlants     = mockPlants.length;
const totalProperties = new Set(mockPlants.flatMap(p => p.properties)).size;
const totalPreps      = mockPlants.filter(p => p.preparation).length;

/* ── Categorias de busca rápida ── */
const QUICK_SEARCHES = [
  'calmante', 'digestivo', 'anti-inflamatório', 'ansiolítico',
  'imunidade', 'sono', 'antiviral',
];

/* ── Passos do "como funciona" ── */
const STEPS = [
  { icon: Search,    label: 'Busque',     desc: 'Por nome comum, científico ou propriedade terapêutica' },
  { icon: CardList,  label: 'Explore',    desc: 'Veja propriedades, efeitos colaterais e contraindicações' },
  { icon: BookHalf,   label: 'Consulte',   desc: 'Acesse o modo de preparo e a origem de cada planta' },
];

export default function ContextSection() {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>

      {/* ── Bloco 1: Estatísticas ── */}
      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <strong>{totalPlants}</strong>
          <span>plantas catalogadas</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <strong>{totalProperties}+</strong>
          <span>propriedades mapeadas</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <strong>{totalPreps}</strong>
          <span>modos de preparo</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <strong>100%</strong>
          <span>acesso gratuito</span>
        </div>
      </div>

      <div className={styles.divider} />

      {/* ── Bloco 2: Buscas rápidas por categoria ── */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>Explorar por propriedade</h2>
        <div className={styles.tagCloud}>
          {QUICK_SEARCHES.map(term => (
            <button
              key={term}
              className={styles.tag}
              onClick={() => navigate(`/busca?q=${encodeURIComponent(term)}`)}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      {/* ── Bloco 3: Como funciona ── */}
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>Como funciona</h2>
        <div className={styles.steps}>
          {STEPS.map(({ icon: Icon, label, desc }, i) => (
            <div key={label} className={styles.step}>
              {/* <div className={styles.stepNumber}>{i + 1}</div> */}
              <Icon className={styles.stepIcon} />
              <strong className={styles.stepLabel}>{label}</strong>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
