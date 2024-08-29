import styles from "./style.module.css";
import { ArticleComments } from "../../components/ArticleComments";
import toFavorite from "../../assets/toFavorite.svg";
import toDelete from "../../assets/toDelete.svg";
import toEdit from "../../assets/edit.svg";
import toLiked from "../../assets/toLiked.svg";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getArticle, getMyInfo } from "../../store/slices/articles";
import { useParams } from 'react-router-dom';
import { ArticleMainInfo } from "../../components/ArticleMainInfo";
import { ChangeArticleMainInfo } from "../../components/ChangeArticleMainInfo";

function Article() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const article = useSelector((state) => state.articles.list);
    const my_info = useSelector((state) => state.articles.my_info);
    const loading = useSelector((state) => state.articles.loading);
    const error = useSelector((state) => state.articles.error);

    const [showSaveBtn, setShowSaveBtn] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(getArticle(id));
            dispatch(getMyInfo());
        }
    }, [dispatch])

    console.log(article);

    if (error) return <h2>{error.message}</h2>;
    if (loading) return <h2>Loading...</h2>;
    if (!loading && (!article || article.length === 0)) return <h1>No data</h1>;

    return (
        <div className={styles.article}>
            <div className={styles.articleContent}>
                <img src={article.image} alt="Article" />
                <div className={styles.articleTextBlock}>
                    {showSaveBtn 
                        ? 
                            <ChangeArticleMainInfo title={article.title} author={article.author} time={article.created_at.match(/\d\d\d\d-\d\d-\d\d/g)} category={article.category.title} desc={article.desc} />
                        : 
                            <ArticleMainInfo title={article.title} author={article.author} time={article.created_at.match(/\d\d\d\d-\d\d-\d\d/g)} category={article.category.title} desc={article.desc} />
                    }
                    <div className={styles.articleActionsWrapper}>
                        <div className={styles.articleActions}>
                            <button>
                                <img src={toFavorite} />
                            </button>
                            <button>
                                <img src={toLiked} />
                            </button>
                            <button>
                                <img src={toDelete} />
                            </button>
                            <button onClick={() => setShowSaveBtn(true)}>
                                <img src={toEdit} />
                            </button>
                        </div>
                        <button className={styles.saveChanges} style={{display: showSaveBtn ? 'block' : 'none'}} onClick={() => setShowSaveBtn(false)}>Save</button>
                    </div>
                </div>
                <div className={styles.aboutAuthor}>
                    <h1>ABOUT THE AUTHOR</h1>
                    <div className={styles.aboutAuthorContent}>
                        <img src={`http://127.0.0.1:8000${my_info.image}`} />
                        <div className={styles.authorBio}>
                            <h1>{my_info.first_name} {my_info.last_name}</h1>
                            <h2>{my_info.username}</h2>
                            <p>{my_info.about_me}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ArticleComments />
            <div className={styles.otherArticles}>
                <div className={styles.prevArticle}>
                    <button>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbElEQVR4nO3du0oDUQAG4fXtBAsVQlBsfG9RsUhh3sAbI4GAEpP6DJ75YPufnWK3ObvLkiRJkiQZCrgGnoEn4HzsmskBd8AnPx5Hb5oWf2PsPIzeNSWOx/gALkZvmw6w3t/833Zxbkdvmw7F8KAYHhTDg2J4UAwPiuFBMTwohgfF8KAYHhTDg2J4UAwPiuFBMTwohgfF8KAYHhTDg2J4UAwPiuFBMTwohgfF8KAYHhTDg2J4UAyPYogUQ6QYIsUQKYZIMUSA1YkDlqvR26YEvBZDAjgDtgdB3oDL0dumBdwAX0XxRTl8jrwDV6O3TasoQkURKopQUYSKIkRvXz4UxYei+FAUH4riQ1F8KIoPRfGhKD4UxYei+FAUH4riQ1F8KIoPRfGhKD4UxYei+FAUH4riQ1F8KIoPRfGhKD4UxYei+FAUH4riQ1F8gPsTB1H7ObEsysuwQVmORdl0XxzPlO3+6oMGSZIkSZb/7huT1IP0e/WwvgAAAABJRU5ErkJggg==" />
                    </button>
                </div>
                <div className={styles.nextArticle}>
                    <button>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXUlEQVR4nO3dsWoCQRgA4csTRoLBwjx7wAQL0TdQmCAETHHWO2Tnq678Ybjlmv92WZIkSZLknwPegTNwBDaj55ka8AJceLgCu9FzTQ04/QlSlNGAt983oygWwHYlyg34GD3btIoiVBShoggVRagoQvT15UNRfCiKD0XxoSg+FMWHovhQFB+K4kNRfCiKD0XxoSg+FMWHovhQFB+K4kNRfCiKD0XxoSg+FMWHovhQFB+K4kNRfCiKD0XxoSg+FMUH2D1ZRG2PXhble9hAs2M9yNfouaZER5bu3yvXlZ35/ejZpkMxPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMOjGCLFECmGSDFEiiFSDBHgtcuJRe6rxt0ULQIcu0vdd2QdgM/78+h5kiRJkmSZ3A+0DIVVO2ON/gAAAABJRU5ErkJggg==" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Article;
