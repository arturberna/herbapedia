import styles from './AnimatedHeadline.module.css';

interface AnimatedHeadlineProps {
  prefix: string;
  items: string[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

export default function AnimatedHeadline({
  prefix,
  items,
  as: Tag = 'h1',
}: AnimatedHeadlineProps) {
  return (
    <Tag className={styles.wrapper}>
      <span className={styles.prefix}>{prefix}</span>

      <div className={styles.animated}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      </div>
    </Tag>
  );
}
