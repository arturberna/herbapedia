import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.left} aria-label="Links institucionais">
        <Link to="/sobre">Sobre</Link>
        <Link to="/em-construcao">Comunidade</Link>
      </nav>

      <nav className={styles.right} aria-label="Links de suporte">
        <Link to="/em-construcao">Configurações</Link>
        <Link to="/em-construcao">Termos</Link>
        <Link to="/em-construcao">Privacidade</Link>
      </nav>
    </footer>
  );
}
