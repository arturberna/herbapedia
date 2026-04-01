import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HourglassSplit } from 'react-bootstrap-icons';
import Header from '../components/layout/Header/Header';
import styles from './EmConstrucaoPage.module.css';

interface Props {
  title: string;
}

export default function EmConstrucaoPage({ title }: Props) {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.iconWrap}>
          <HourglassSplit aria-hidden="true" />
        </div>
        <p className={styles.eyebrow}>Em Construção</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>
          Esta ferramenta está sendo desenvolvida com cuidado.<br />
          Em breve, novidades por aqui.
        </p>
        <button className={styles.back} onClick={() => navigate(-1)}>
          <ArrowLeft aria-hidden="true" />
          Voltar
        </button>
      </div>
    </div>
  );
}
