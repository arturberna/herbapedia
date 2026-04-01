import { Link } from 'react-router-dom';
import SearchBar from '../../search/SearchBar';
import UserAvatar from '../../ui/UserAvatar';
import { useAuth } from '../../../contexts/AuthContext';
import logoImg from '../../../assets/img/logo_transp.png';
import styles from './SearchHeader.module.css';

interface SearchHeaderProps {
  initialValue?: string;
  onSubmit?: (query: string) => void;
}

export default function SearchHeader({ initialValue, onSubmit }: SearchHeaderProps) {
  const { user, login, logout } = useAuth();

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo} aria-label="Ir para a página inicial">
        <img src={logoImg} alt="HerbaPedia" />
        <span className={styles.logoText}>HERBAPEDIA</span>
      </Link>

      <div className={styles.searchWrapper}>
        <SearchBar
          key={initialValue}
          initialValue={initialValue}
          onSubmit={onSubmit}
          variant="solid"
        />
      </div>

      <div className={styles.avatarSlot}>
        <UserAvatar user={user} onLogin={login} onLogout={logout} />
      </div>
    </header>
  );
}
