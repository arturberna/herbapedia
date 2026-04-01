import styles from './ResultList.module.css';

export default function ResultList({ itens }: { itens: any[] }) {
    if(itens.length === 0) {
        return (
            <div>
                <h1>Result List</h1>
                <p>No results found.</p>
            </div>
        );
    }
    return (
        <div>
           
            {/* <ul>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul> */}

            {/* Modelo novo */}
            <h1>Resultados</h1>
            <ol className={`${styles.olCards} ${styles.alternate}`}>
                {itens.map((item, index) => {
                    return (
                        <li key={index}>
                        <div className={styles.step}></div>
                        <div className={styles.title}>{item.nome}</div>
                        <div className={styles.content}>{item.descricao}</div>
                        </li>
                    );
                })}
            </ol>
        </div>

        
    );
}