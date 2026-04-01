import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, PatchCheckFill, UnlockFill, EyeFill, PeopleFill } from 'react-bootstrap-icons';
import camomilaBg from '../assets/img/camomila_cinematic.png';
import hortelaBg   from '../assets/img/hortela_cinematic.png';
import lavandaBg   from '../assets/img/lavanda_cinematic.png';
import aloeBg      from '../assets/img/aloe_cinematic.png';

import styles from './SobrePage.module.css';

/* ── Section data ─────────────────────────────────── */
interface ValueItem { icon: React.ReactNode; title: string; desc: string; }
interface SectionData {
  id: string;
  bg?: string;
  bgPosition?: 'center' | 'left' | 'right';
  bgSize?: 'cover' | 'contain';
  eyebrow: string;
  heading: React.ReactNode;
  text?: string;
  values?: ValueItem[];
  cta?: boolean;
}

const SECTIONS: SectionData[] = [
  {
    id: 'missao',
    bg: camomilaBg,
    bgPosition: 'left',
    bgSize: 'contain',
    eyebrow: 'Nossa Missão',
    heading: <>Conhecimento fitoterápico ao <em>alcance de todos</em></>,
    text: 'O Herbapedia nasceu da convicção de que o saber sobre plantas medicinais deve ser acessível, rigoroso e belo. Reunimos dados científicos, tradições seculares e design cuidadoso em um único espaço.',
  },
  {
    id: 'ciencia',
    bg: aloeBg,
    bgPosition: 'left',
    bgSize: 'contain',
    eyebrow: 'Fundamentado em Ciência',
    heading: <>Cada informação, <em>verificada</em></>,
    text: 'Nossas fichas combinam nomenclatura científica, propriedades farmacológicas e referências de artigos indexados em bases como PubMed e SciELO. O saber popular encontra o rigor acadêmico.',
  },
  {
    id: 'projeto',
    bg: hortelaBg,
    eyebrow: 'O Projeto',
    heading: <>Um ervanário digital em <em>constante crescimento</em></>,
    text: 'Começamos com oito plantas e planejamos centenas. A base de dados é revisada continuamente por profissionais de saúde, garantindo que cada atualização eleve o padrão da plataforma.',
  },
  {
    id: 'valores',
    bg: lavandaBg,
    eyebrow: 'Nossos Valores',
    heading: <>O que nos <em>guia</em></>,
    values: [
      { icon: <PatchCheckFill />, title: 'Precisão científica', desc: 'Cada dado rastreado até sua fonte primária.'  },
      { icon: <UnlockFill />,    title: 'Acesso aberto',       desc: 'O conhecimento não deveria ter portão.'       },
      { icon: <EyeFill />,       title: 'Acessibilidade',       desc: 'Design inclusivo, do contraste à semântica.' },
      { icon: <PeopleFill />,    title: 'Comunidade',           desc: 'Construído com e para quem usa plantas.'     },
    ],
  },
  {
    id: 'explorar',
    bg: aloeBg,
    bgPosition: 'right',
    bgSize: 'contain',
    eyebrow: 'Comece Agora',
    heading: <>Explore o <em>ervanário</em></>,
    text: 'Pesquise por nome comum, científico ou propriedade terapêutica. Séculos de conhecimento fitoterápico, a uma busca de distância.',
    cta: true,
  },
];

/* ── Component ────────────────────────────────────── */
export default function SobrePage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  /* Ativa scroll-snap no html; limpa ao sair da página */
  useEffect(() => {
    document.documentElement.classList.add('sobre-page');
    return () => document.documentElement.classList.remove('sobre-page');
  }, []);

  /* Dot indicator via IntersectionObserver */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = sectionRefs.current.indexOf(e.target as HTMLElement);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { threshold: 0.5 },
    );
    sectionRefs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.page}>

      {/* Navegação de volta — fixa no topo-esquerdo */}
      <Link to="/" className={styles.backNav} aria-label="Voltar para o início">
        <ArrowLeft aria-hidden="true" />
        <span>Herbapedia</span>
      </Link>

      {/* Dots indicator — fixo no centro-direito */}
      <nav className={styles.dots} aria-label="Navegação por seções">
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
            aria-label={s.eyebrow}
          />
        ))}
      </nav>

      {/* Seções — cada uma ocupa 100dvh e snapa */}
      <main className={styles.main}>
        {SECTIONS.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={styles.section}
            ref={el => { sectionRefs.current[i] = el; }}
          >
            {/* .content é position:fixed e animado pelo view-timeline da section pai */}
            <div
              className={[
                styles.content,
                s.bg ? styles.contentImage : styles.contentDark,
                s.bgPosition === 'left'  ? styles.positionLeft  : '',
                s.bgPosition === 'right' ? styles.positionRight : '',
              ].join(' ')}
              style={s.bg ? { backgroundImage: `url(${s.bg})`, backgroundPosition: s.bgPosition ?? 'center', backgroundSize: s.bgSize ?? 'cover' } : undefined}
            >
              <div className={styles.contentInner}>

                <p className={styles.eyebrow}>{s.eyebrow}</p>
                <h2 className={styles.heading}>{s.heading}</h2>

                {s.text && <p className={styles.text}>{s.text}</p>}

                {s.values && (
                  <div className={styles.valuesGrid}>
                    {s.values.map(v => (
                      <div key={v.title} className={styles.valueCard}>
                        <span className={styles.valueIcon} aria-hidden="true">{v.icon}</span>
                        <strong className={styles.valueTitle}>{v.title}</strong>
                        <p className={styles.valueDesc}>{v.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {s.cta && (
                  <Link to="/" className={styles.ctaBtn}>
                    <Search aria-hidden="true" />
                    Pesquisar plantas
                  </Link>
                )}

              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
