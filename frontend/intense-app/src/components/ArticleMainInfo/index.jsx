import styles from "./style.module.css";

export const ArticleMainInfo = ({ title, author, time, category, desc }) => {
    return (
        <>
            <h1 className={styles.articleTitle}>{title}</h1>
            <h2 className={styles.articleAuthor}>
                {author} • {time}
            </h2>
            <h3 className={styles.articleCategory}>#{category}</h3>
            <p className={styles.articleDesc}>{desc}</p>
        </>
    );
};
