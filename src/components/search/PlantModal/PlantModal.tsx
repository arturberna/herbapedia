import { useEffect } from 'react';

import {
  XLg, CheckCircleFill, ExclamationTriangleFill,
  GeoAlt, Droplet, JournalText, ArrowUpRight, FileEarmarkPdf,
} from 'react-bootstrap-icons';
import type { Plant } from '../../../types/plant';
import styles from './PlantModal.module.css';

interface PlantModalProps {
  plant: Plant;
  onClose: () => void;
}

export default function PlantModal({ plant, onClose }: PlantModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handlePdf = () => {
    window.open(`/planta/${plant.id}/pdf`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label={`Detalhes de ${plant.commonName}`}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>

        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar">
          <XLg />
        </button>

        {/* scrollArea garante que border-radius corte os cantos corretamente */}
        <div className={styles.scrollArea}>
          <div className={styles.header}>
            <img
              className={styles.image}
              src={plant.imageUrl}
              alt={plant.commonName}
            />
            <div className={styles.headerText}>
              <h2 className={styles.commonName}>{plant.commonName}</h2>
              <p className={styles.scientificName}>{plant.scientificName}</p>
              <p className={styles.description}>{plant.description}</p>
            </div>
          </div>

          <div className={styles.body}>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <CheckCircleFill className={styles.iconGood} />
                Propriedades Fitoterápicas
              </h3>
              <ul className={styles.list}>
                {plant.properties.map((prop, i) => (
                  <li key={i} className={styles.itemGood}>{prop}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <ExclamationTriangleFill className={styles.iconWarn} />
                Efeitos Colaterais e Contraindicações
              </h3>
              <ul className={styles.list}>
                {plant.sideEffects.map((effect, i) => (
                  <li key={i} className={styles.itemWarn}>{effect}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <GeoAlt className={styles.iconInfo} />
                Origem
              </h3>
              <p className={styles.text}>{plant.origin}</p>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Droplet className={styles.iconInfo} />
                Preparo e Consumo
              </h3>
              <p className={styles.text}>{plant.preparation}</p>
            </section>

            <div className={styles.actions}>
              <a
                href={plant.sourceUrl ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceLink}
                aria-label={`Artigo científico sobre ${plant.commonName}`}
              >
                <JournalText className={styles.sourceLinkIcon} aria-hidden="true" />
                <span>Fonte científica</span>
                <ArrowUpRight className={styles.sourceLinkArrow} aria-hidden="true" />
              </a>

              <button className={styles.pdfBtn} onClick={handlePdf} aria-label="Exportar como PDF">
                <FileEarmarkPdf aria-hidden="true" />
                Exportar PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
