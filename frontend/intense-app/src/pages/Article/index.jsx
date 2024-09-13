import styles from "./style.module.css";
import { ArticleComments } from "../../components/ArticleComments";
import toFavorite from "../../assets/toFavorite.svg";
import toDelete from "../../assets/toDelete.svg";
import toEdit from "../../assets/edit.svg";
import toLiked from "../../assets/toLiked.svg";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { addToFavoriteArticle, addToLikedArticle, changeArticle, deleteArticle, getArticle, getCategories, getMyInfo } from "../../store/slices/articles";
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleMainInfo } from "../../components/ArticleMainInfo";
import { ChangeArticleMainInfo } from "../../components/ChangeArticleMainInfo";
import { UploadPhoto } from './../../components/UploadPhoto';
import { Preloader } from "../../components/Preloader";

function Article() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const article = useSelector((state) => state.articles.list);
    const my_info = useSelector((state) => state.articles.my_info);
    const categories = useSelector((state) => state.articles.categories);
    const loading = useSelector((state) => state.articles.loading);
    const error = useSelector((state) => state.articles.error);

    const [showSaveBtn, setShowSaveBtn] = useState(false);
    const [image, setImage] = useState("");
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(getArticle(id));
            dispatch(getMyInfo());
            dispatch(getCategories());
        }
    }, [dispatch, id, showSaveBtn]);

    function HandleAddToFavorite(){
        dispatch(addToFavoriteArticle(id))
        navigate('/favorites-articles')
    }

    function HandleAddToLiked(){
        dispatch(addToLikedArticle(id))
        navigate('/liked-articles')
    }

    function HandleDelete(){
        dispatch(deleteArticle(id));
        navigate(-1)
    }

    const handleSave = (updatedArticle) => {
        let categoryFound = false;
    
        categories.forEach((category) => {
            if (category.title === updatedArticle.category) {
                const articleID = id;
                categoryFound = true;
    
                dispatch(changeArticle({
                    article: {
                        image: image || null,
                        category_id: category.id,
                        ...updatedArticle
                    },
                    articleID
                }))
                .unwrap()
                .then(() => {
                    setShowSaveBtn(false);  
                    setShowError(false);  
                })
                .catch(() => {
                    setShowError(true); 
                });
            }
        });
    
        if (!categoryFound) {
            setShowError(true);
        }
    };

    if (error) return <h2>{error.message}</h2>;
    if (loading) return <Preloader />;
    if (!loading && (!article || article.length === 0)) return <h1>No data</h1>;

    const formattedDate = article.created_at ? article.created_at.match(/\d\d\d\d-\d\d-\d\d/g) : 'N/A';

    return (
        <div className={styles.article}>
            <div className={styles.articleContent}>
                {showSaveBtn ? <UploadPhoto setImage={setImage}/> : <img src={article.image} alt="Article" />}
                <div className={styles.articleTextBlock}>
                    {showSaveBtn 
                        ? <ChangeArticleMainInfo 
                            title={article?.title} 
                            author={article?.author} 
                            time={formattedDate} 
                            category={article?.category?.title || 'Unknown'} 
                            desc={article?.desc} 
                            onSave={handleSave} 
                            showError={showError}
                        />
                        : <ArticleMainInfo 
                            title={article?.title} 
                            author={article?.author} 
                            time={formattedDate} 
                            category={article?.category?.title || 'Unknown'} 
                            desc={article?.desc} 
                        />
                    }
                    <div className={styles.articleActionsWrapper}>
                        <div className={styles.articleActions}>
                            <button onClick={HandleAddToFavorite}>
                                <img src={toFavorite} alt="Favorite" />
                            </button>
                            <button onClick={HandleAddToLiked}>
                                <img src={toLiked} alt="Liked" />
                            </button>
                            <button onClick={HandleDelete}>
                                <img src={toDelete} alt="Delete" />
                            </button>
                            <button onClick={() => setShowSaveBtn(true)}>
                                <img src={toEdit} alt="Edit" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutAuthor}>
                    <h1>ABOUT THE AUTHOR</h1>
                    <div className={styles.aboutAuthorContent}>
                        <img src={`http://127.0.0.1:8000${my_info.image}`} alt="Author" />
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
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbElEQVR4nO3du0oDUQAG4fXtBAsVQlBsfG9RsUhh3sAbI4GAEpP6DJ75YPufnWK3ObvLkiRJkiQZCrgGnoEn4HzsmskBd8AnPx5Hb5oWf2PsPIzeNSWOx/gALkZvmw6w3t/833Zxbkdvmw7F8KAYHhTDg2J4UAwPiuFBMTwohgfF8KAYHhTDg2J4UAwPiuFBMTwohgfF8KAYHhTDg2J4UAwPiuFBMTwohgfF8KAYHhTDg2J4UAyPYogUQ6QYIsUQKYZIMUSA1YkDlqvR26YEvBZDAjgDtgdB3oDL0dumBdwAX0XxRTl8jrwDV6O3TasoQkURKopQUYSKIkRvXz4UxYei+FAUH4riQ1F8KIoPRfGhKD4UxYei+FAUH4riQ1F8KIoPRfGhKD4UxYei+FAUH4riQ1F8KIoPRfGhKD4UxYei+FAUH4riQ1F8gPsTB1H7ObEsysuwQVmORdl0XxzPlO3+6oMGSZIkSZb/7huT1IP0e/WwvgAAAABJRU5ErkJggg==" alt="Previous" />
                    </button>
                </div>
                <div className={styles.nextArticle}>
                    <button>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXUlEQVR4nO3dsWoCQRgA4csTRoLBwjx7wAQL0TdQmCAETHHWO2Tnq678Ybjlmv92WZIkSZLknwPegTNwBDaj55ka8AJceLgCu9FzTQ04/QlSlNGAt983oygWwHYlyg34GD3btIoiVBShoggVRagoQvT15UNRfCiKD0XxoSg+FMWHovhQFB+K4kNRfCiKD0XxoSg+FMWHovhQFB+K4kNRfCiKD0XxoSg+FMWHovhQFB+K4kNRfCiKD0XxoSg+FMWHovhQFB+K4kNRfCiKD0XxoSg+FMUH2D1ZRG2PXhble9hAs2M9yNfouaZER5bu3yvXlZ35/ejZpkMxPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMODYnhQDA+K4UExPCiGB8XwoBgeFMOjGCLFECmGSDFEiiFSDBHgtcuJRe6rxt0ULQIcu0vdd2QdgM/78+h5kiRJkmSZ3A+0DIVVO2ON/gAAAABJRU5ErkJggg==" alt="Next" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Article;
