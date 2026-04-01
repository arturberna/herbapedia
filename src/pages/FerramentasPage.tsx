import { Link } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import styles from './FerramentasPage.module.css';

import searchCard   from '../assets/img/busca_card.jpeg';
import comunityCard   from '../assets/img/comunidade_card.jpeg';
import materialsCard   from '../assets/img/materiais_card.jpeg';
import gameCard   from '../assets/img/game_card.jpeg';
import boardCard   from '../assets/img/board_card.jpeg';

interface ToolCard {
  id: string;
  color: 'green' | 'amber' | 'sage' | 'terra' | 'teal';
  img: string;
  imgAlt: string;
  status: string;
  title: string;
  desc: string;
  tags: string[];
  cta: { label: string; to: string };
  available: boolean;
}

const TOOLS: ToolCard[] = [
  {
    id: 'busca',
    color: 'green',
    img: searchCard,
    imgAlt: 'Tela de busca de plantas medicinais',
    status: 'Disponível',
    title: 'Engine de Busca Fitoterápica',
    desc: 'Pesquise por nome popular, nome científico ou propriedade terapêutica em nossa base de plantas medicinais. Cada resultado combina nomenclatura científica, farmacologia e referências indexadas em PubMed e SciELO — o saber popular encontra o rigor acadêmico.',
    tags: ['Plantas medicinais', 'Busca científica', 'Farmacologia'],
    cta: { label: 'Pesquisar plantas →', to: '/' },
    available: true,
  },
  {
    id: 'rede',
    color: 'amber',
    img: comunityCard,
    imgAlt: 'Pessoas trabalhando em equipe',
    status: 'Em breve',
    title: 'Rede Colaborativa de Pesquisadores',
    desc: 'Um espaço para etnobotânicos, farmacêuticos, médicos e curiosos compartilharem descobertas, revisarem fichas e construírem coletivamente o maior ervanário digital do Brasil. O conhecimento cresce mais rápido quando cultivado em comunidade.',
    tags: ['Colaboração', 'Pesquisa', 'Comunidade'],
    cta: { label: 'Em construção', to: '/rede' },
    available: false,
  },
  {
    id: 'materiais',
    color: 'sage',
    img: materialsCard,
    imgAlt: 'Materiais didáticos sobre fitoterapia',
    status: 'Em breve',
    title: 'Materiais Didáticos',
    desc: 'Apostilas, guias visuais e infográficos sobre fitoterapia, elaborados por profissionais de saúde e adaptados para diferentes públicos — do estudante de medicina ao agricultor familiar. Conteúdo aberto, imprimível e acessível.',
    tags: ['Educação', 'Material aberto', 'Saúde'],
    cta: { label: 'Em construção', to: '/materiais' },
    available: false,
  },
  {
    id: 'jogo',
    color: 'terra',
    img: gameCard,
    imgAlt: 'Jogo digital de etnobotânica',
    status: 'Em breve',
    title: 'Jogo Digital de Etnobotânica',
    desc: 'Um jogo educativo que transforma o aprendizado sobre plantas medicinais em aventura. Identifique espécies, aprenda sobre usos tradicionais e teste seus conhecimentos em desafios interativos criados com base em dados científicos reais.',
    tags: ['Gamificação', 'Educação', 'Interativo'],
    cta: { label: 'Em construção', to: '/jogo' },
    available: false,
  },
  {
    id: 'jogo-fisico',
    color: 'teal',
    img: boardCard,
    imgAlt: 'Jogo físico de cartas botânicas',
    status: 'Em breve',
    title: 'Jogo Físico de Tabuleiro Botânico',
    desc: 'Um jogo de tabuleiro imprimível e físico onde cada casa traz questões sobre plantas medicinais com suas propriedades, usos e curiosidades. Perfeito para dinâmicas em sala de aula, oficinas comunitárias e consultas clínicas — aprender sobre fitoterápicos nunca foi tão tangível.',
    tags: ['Tabuleiro', 'Imprimível', 'Educação'],
    cta: { label: 'Em construção', to: '/jogo-fisico' },
    available: false,
  },
];

export default function FerramentasPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Ferramentas</h1>

        {TOOLS.map(tool => (
          <article key={tool.id} className={`${styles.postcard} ${styles[tool.color]}`}>
            <Link to={tool.cta.to} className={styles.imgLink} tabIndex={-1} aria-hidden="true">
              <img className={styles.img} src={tool.img} alt={tool.imgAlt} />
            </Link>

            <div className={styles.text}>
              <span className={styles.status}>{tool.status}</span>
              <Link to={tool.cta.to} className={styles.title}>{tool.title}</Link>
              <div className={styles.bar} />
              <p className={styles.desc}>{tool.desc}</p>

              <ul className={styles.tags}>
                {tool.tags.map(t => (
                  <li key={t} className={styles.tag}>{t}</li>
                ))}
                <li className={`${styles.tag} ${tool.available ? styles.tagCta : styles.tagComingSoon}`}>
                  {tool.available
                    ? <Link to={tool.cta.to}>{tool.cta.label}</Link>
                    : tool.cta.label}
                </li>
              </ul>
            </div>
          </article>
        ))}
      </main>
      <Footer />
    </div>
  );
}
