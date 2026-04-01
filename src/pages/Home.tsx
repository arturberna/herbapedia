import './Home.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import HeroSection from '../components/layout/HeroSection';
import SearchBar from '../components/search/SearchBar';
import Footer from '../components/layout/Footer';
import AnimatedHeadline from '../components/ui/AnimatedHeadline';
import ContextSection from '../components/layout/ContextSection';
import styles from './Home.module.css';

export function Home() {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/busca?q=${encodeURIComponent(query)}`);
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <HeroSection>
        <Header />

        <div className={styles.heroCenter}>

          {/* 1. Eyebrow — ancora o contexto */}
          <span className={styles.eyebrow}>Enciclopédia fitoterápica digital</span>

          {/* Grupo coeso: headline → subtítulo → searchbar */}
          <div className={styles.heroGroup}>
            <AnimatedHeadline
              prefix="Explore o mundo"
              items={['das plantas medicinais', 'dos preparos de ervas', 'dos remédios naturais', 'das tradições fitoterápicas']}
            />

            <p className={styles.subtitle}>
              Consulte propriedades terapêuticas, modos de preparo e indicações
              de centenas de plantas medicinais em um só lugar.
            </p>

            <SearchBar onSubmit={handleSearch} variant="hero" />
          </div>

          {/* 5. Selos de confiança — reduz atrito */}
          <div className={styles.trustPills}>
            <span className={styles.pill}>
              <span className={styles.pillDot} />
              127 plantas catalogadas
            </span>
            <span className={styles.pillSep} />
            <span className={styles.pill}>
              <span className={styles.pillDot} />
              Uso tradicional documentado
            </span>
            <span className={styles.pillSep} />
            <span className={styles.pill}>
              <span className={styles.pillDot} />
              Referências científicas
            </span>
          </div>

        </div>
      </HeroSection>
      <ContextSection />
      <Footer />
    </main>
  );
}
