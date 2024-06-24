import styles from "./style.module.css";

export const HomePageArticles = ({ articles }) => {
    return (
        <ul className={styles.articlesList}>
            {articles.map((article) => (
                <li key={article.id} className={styles.article}>
                    <div className={styles.articleImgBlock}>
                        <img src={article.image} alt="some picture" />
                    </div>
                    <div className={styles.articleTextContent}>
                        <h1>{article.category}</h1>
                        <h2>{article.title}</h2>
                        <h3>
                            {article.author} • {article.date}
                        </h3>
                        <p>{article.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};
