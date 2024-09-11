import styles from './style.module.css';

export const Tags = ({ tags, setFilterByTag }) => {

  return (
    <div className={styles.tagsContainer}>
        <h1 className={styles.tagsTitle}>tags.</h1>
        <ul className={styles.tags}>
            {tags.map(tag => (
                <li key={tag.id} onClick={() => setFilterByTag(tag.name)}>{tag.name}</li>
            ))}
        </ul>
    </div>
  )
}
