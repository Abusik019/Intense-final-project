import styles from "./style.module.css";
import { NavLink } from 'react-router-dom';
import emptyGif from '../../assets/empty.gif';

export const HomePageArticles = ({ articles = [] }) => {

    if (articles.length === 0) {
        return (
            <div className={styles.noArticles}>
                <img src={emptyGif}/>
                <p>It's empty here : |</p>
            </div>
        )
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
                            <NavLink to={`/articles/${article.id}`}>{article.title}</NavLink>
                            <h3>
                                {article.author} • {formattedDate ? formattedDate.join('') : 'N/A'} ({article.time_to_read} min read)
                            </h3>
                            <p>{article.desc ? article.desc : ''}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
