import { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, XLg } from 'react-bootstrap-icons';
import styles from './Header.module.css';
import logoImg from '../../../assets/img/logo_transp.png';
import UserAvatar from '../../ui/UserAvatar';
import { useAuth } from '../../../contexts/AuthContext';

export default function Header() {
  const { user, login, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logoImg} alt="HerbaPedia Logo" />
        <span className={styles.logoText}>HERBAPEDIA</span>
      </Link>

      {/* Desktop nav — hidden on mobile */}
      <nav className={styles.desktopNav}>
        <Link to="/sobre">Sobre</Link>
        <Link to="/ferramentas">Ferramentas</Link>
        <UserAvatar user={user} onLogin={login} onLogout={logout} />
      </nav>

      {/* Mobile controls: avatar + hamburger */}
      <div className={styles.mobileControls}>
        <UserAvatar user={user} onLogin={login} onLogout={logout} />
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <XLg /> : <List />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
          <Link to="/ferramentas" onClick={() => setMenuOpen(false)}>Ferramentas</Link>
        </div>
      )}
    </div>
  );
}
