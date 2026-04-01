import { useParams, Link } from 'react-router-dom';
import { CheckCircleFill, ExclamationTriangleFill, GeoAlt, Droplet, JournalText, Printer } from 'react-bootstrap-icons';
import { mockPlants } from '../data/mockPlants';
import styles from './PlantPrintPage.module.css';

export default function PlantPrintPage() {
  const { id } = useParams<{ id: string }>();
  const plant = mockPlants.find((p) => p.id === id);

  if (!plant) {
    return (
      <div className={styles.notFound}>
        <p>Planta não encontrada.</p>
        <Link to="/">Voltar ao início</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Barra de ação — oculta na impressão */}
      <div className={styles.printBar}>
        
        <button className={styles.printBtn} onClick={() => window.print()}>
          <Printer aria-hidden="true" />
          Imprimir / Salvar como PDF
        </button>
      </div>

      {/* Conteúdo imprimível */}
      <article className={styles.document}>
        <header className={styles.docHeader}>
          <img
            className={styles.image}
            src={plant.imageUrl}
            alt={plant.commonName}
          />
          <div className={styles.headerText}>
            <p className={styles.brand}>HERBAPEDIA</p>
            <h1 className={styles.commonName}>{plant.commonName}</h1>
            <p className={styles.scientificName}>{plant.scientificName}</p>
            <p className={styles.description}>{plant.description}</p>

            {plant.sourceUrl && (
              <a
                href={plant.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceLink}
              >
                <JournalText aria-hidden="true" />
                Fonte científica
              </a>
            )}
          </div>
        </header>

        <div className={styles.grid}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <CheckCircleFill className={styles.iconGood} aria-hidden="true" />
              Propriedades Fitoterápicas
            </h2>
            <ul className={styles.list}>
              {plant.properties.map((prop, i) => (
                <li key={i} className={styles.itemGood}>{prop}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <ExclamationTriangleFill className={styles.iconWarn} aria-hidden="true" />
              Efeitos Colaterais e Contraindicações
            </h2>
            <ul className={styles.list}>
              {plant.sideEffects.map((effect, i) => (
                <li key={i} className={styles.itemWarn}>{effect}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <GeoAlt className={styles.iconInfo} aria-hidden="true" />
              Origem
            </h2>
            <p className={styles.text}>{plant.origin}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Droplet className={styles.iconInfo} aria-hidden="true" />
              Preparo e Consumo
            </h2>
            <p className={styles.text}>{plant.preparation}</p>
          </section>
        </div>

        <footer className={styles.docFooter}>
          <p>Gerado por Herbapedia · herbapedia.com.br</p>
          <p>As informações aqui contidas têm caráter educativo e não substituem orientação médica profissional.</p>
        </footer>
      </article>
    </div>
  );
}
