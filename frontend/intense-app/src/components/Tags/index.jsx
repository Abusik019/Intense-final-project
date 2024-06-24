import styles from './style.module.css';

export const Tags = ({ tags }) => {
  return (
    <div className={styles.tagsContainer}>
        <h1 className={styles.tagsTitle}>tags.</h1>
        <ul className={styles.tags}>
            {tags.map(tag => (
                <li key={tag.id}>{tag.name}</li>
            ))}
        </ul>
    </div>
  )
}
