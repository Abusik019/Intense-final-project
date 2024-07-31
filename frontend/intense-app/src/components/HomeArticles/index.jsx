import styles from "./style.module.css";

export const HomePageArticles = ({ articles = [] }) => {
    if (!Array.isArray(articles)) {
        console.error("articles is not an array", articles);
        return <p>No articles available</p>;
    }

    if (articles.length === 0) {
        return <p>No articles available</p>;
    }

    return (
        <ul className={styles.articlesList}>
            {articles.map((article) => {
                const formattedDate = article.created_at ? article.created_at.match(/\d\d\d\d-\d\d-\d\d/g) : 'N/A';

                return (
                    <li key={article.id} className={styles.article}>
                        <div className={styles.articleImgBlock}>
                            <img src={article.image} alt="some picture" />
                        </div>
                        <div className={styles.articleTextContent}>
                            <h1>{article.category.title}</h1>
                            <h2>{article.title}</h2>
                            <h3>
                                {article.author} • {formattedDate ? formattedDate.join('') : 'N/A'} ({article.time_to_read} read)
                            </h3>
                            <p>{article.desc ? article.desc : ''}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
