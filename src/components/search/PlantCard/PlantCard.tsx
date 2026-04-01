import { useState } from 'react';
import { CheckCircleFill, ExclamationTriangleFill, JournalText, ArrowUpRight } from 'react-bootstrap-icons';
import type { Plant } from '../../../types/plant';
import PlantModal from '../PlantModal';
import styles from './PlantCard.module.css';

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <article className={styles.card}>
        <img
          className={styles.image}
          src={plant.imageUrl}
          alt={plant.commonName}
          loading="lazy"
        />

        <div className={styles.info}>
          <h2 className={styles.commonName}>{plant.commonName}</h2>
          <p className={styles.scientificName}>{plant.scientificName}</p>

          <div className={styles.section}>
            <CheckCircleFill className={styles.iconGood} aria-hidden="true" />
            <ul className={styles.tagList}>
              {plant.properties.slice(0, 3).map((prop, i) => (
                <li key={i} className={styles.tagGood}>{prop}</li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <ExclamationTriangleFill className={styles.iconWarn} aria-hidden="true" />
            <ul className={styles.tagList}>
              {plant.sideEffects.slice(0, 2).map((effect, i) => (
                <li key={i} className={styles.tagWarn}>{effect}</li>
              ))}
            </ul>
          </div>

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

            <button
              className={styles.detailsBtn}
              onClick={() => setModalOpen(true)}
              aria-label={`Ver detalhes de ${plant.commonName}`}
            >
              Ver detalhes
            </button>
          </div>
        </div>
      </article>

      {modalOpen && (
        <PlantModal plant={plant} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
