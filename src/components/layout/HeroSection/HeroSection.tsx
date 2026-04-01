import React from 'react';
import styles from './HeroSection.module.css';
import videoBackground from '../../../assets/video/vento_plantas.mp4';

interface HeroSectionProps {
  /** URL do vídeo de background. Se não for passada, usa uma string de fallback. */
  videoUrl?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  videoUrl = videoBackground,
  children 
}) => {
  return (
    <section className={styles.heroContainer}>
      {/* O fundo é independente do conteúdo */}
      <div className={styles.backgroundWrapper}>
        <video className={styles.heroVideo} autoPlay loop muted playsInline>
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
      </div>

      {/* O conteúdo apenas "flutua" por cima */}
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;