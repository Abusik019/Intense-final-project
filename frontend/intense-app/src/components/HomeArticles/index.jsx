import styles from "./style.module.css";

export const HomePageArticles = ({ articles }) => {
    
    return (
        <ul className={styles.articlesList}>
            {articles.length && articles.map((article) => (
                <li key={article.id} className={styles.article}>
                    <div className={styles.articleImgBlock}>
                        <img src={article.image} alt="some picture" />
                    </div>
                    <div className={styles.articleTextContent}>
                        <h1>{article.category.title}</h1>
                        <h2>{article.title}</h2>
                        <h3>
                            {article.author} • {article.created_at?.match(/\d\d\d\d-\d\d-\d\d/g)} ({article.time_to_read} read)
                        </h3>
                        <p>{article.desc}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};
