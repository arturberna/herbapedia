import styles from './Header.module.css';
import logoImg from '../../../assets/img/logo_transp.png';
import UserAvatar from '../../ui/UserAvatar';
import { useAuth } from '../../../contexts/AuthContext';

export default function Header() {
  const { user, login, logout } = useAuth();

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logoImg} alt="HerbaPedia Logo" />
        <span className={styles.logoText}>HERBAPEDIA</span>
      </div>
      <nav>
        <a href="#">Sobre</a>
        <a href="#">Ferramentas</a>
        <UserAvatar user={user} onLogin={login} onLogout={logout} />
      </nav>
    </div>
  );
}
