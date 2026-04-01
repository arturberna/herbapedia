import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.left} aria-label="Links institucionais">
        <Link to="/sobre">Sobre</Link>
        <a href="#">Comunidade</a>
      </nav>

      <nav className={styles.right} aria-label="Links de suporte">
        <a href="#">Configurações</a>
        <a href="#">Termos</a>
        <a href="#">Privacidade</a>
      </nav>
    </footer>
  );
}
