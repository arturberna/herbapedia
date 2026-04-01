import { useSearchParams, useNavigate } from 'react-router-dom';
import SearchHeader from '../components/layout/SearchHeader';
import PlantCard from '../components/search/PlantCard';
import Footer from '../components/layout/Footer';
import { searchPlants } from '../data/mockPlants';
import styles from './SearchResults.module.css';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') ?? '';
  const results = searchPlants(query);

  const handleNewSearch = (newQuery: string) => {
    navigate(`/busca?q=${encodeURIComponent(newQuery)}`);
  };

  return (
    <div className={styles.page}>
      <SearchHeader initialValue={query} onSubmit={handleNewSearch} />

      <main className={styles.main}>
        {query && (
          <p className={styles.resultInfo}>
            {results.length > 0
              ? `${results.length} resultado${results.length > 1 ? 's' : ''} para "${query}"`
              : `Nenhum resultado encontrado para "${query}"`}
          </p>
        )}

        {results.length > 0 ? (
          <div className={styles.resultsList}>
            {results.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        ) : (
          query && (
            <div className={styles.emptyState}>
              <p>Tente buscar por outro nome comum, científico ou propriedade.</p>
              <p className={styles.suggestions}>
                Sugestões: <button onClick={() => handleNewSearch('camomila')}>camomila</button>,{' '}
                <button onClick={() => handleNewSearch('gengibre')}>gengibre</button>,{' '}
                <button onClick={() => handleNewSearch('lavanda')}>lavanda</button>
              </p>
            </div>
          )
        )}
      </main>

      <Footer />
    </div>
  );
}
