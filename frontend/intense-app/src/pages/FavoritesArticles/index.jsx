import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tags } from "../../components/Tags";
import PaginationItem from "../../components/Pagination";
import { tags } from "../../tags";
import { HomePageArticles } from "../../components/HomeArticles";
import { getFavoriteArticles } from "../../store/slices/articles";
import { Preloader } from "../../components/Preloader";

const MAX_ARTICLES_PER_PAGE = 8;

function FavoritesArticles() {
    const dispatch = useDispatch();

    const favArticles = useSelector((state) => state.articles.list);
    const loading = useSelector((state) => state.articles.loading);
    const error = useSelector((state) => state.articles.error);

    const [currentPage, setCurrentPage] = useState(1);
    const [filterByTag, setFilterByTag] = useState();

    const favArticlesByTag = Array.isArray(favArticles) ? favArticles.filter(article => article.category.title === filterByTag) : [];
    
    useEffect(() => {
        dispatch(getFavoriteArticles());
    }, [dispatch]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * MAX_ARTICLES_PER_PAGE;
    const currentArticles = Array.isArray(favArticles) ? favArticles.slice(startIndex, startIndex + MAX_ARTICLES_PER_PAGE) : [];
    const filterCurrentArticles = Array.isArray(favArticlesByTag) ? favArticlesByTag.slice(startIndex, startIndex + MAX_ARTICLES_PER_PAGE) : [];
    
    if (error) return <h2>{error.message}</h2>;
    if (loading) return <Preloader />;
    if (!loading && (!favArticles || favArticles.length === 0)) return <h1>No data</h1>;

    return (
        <div className={styles.favoritesArticles}>
            <div className={styles.favoritesArticlesContainer}>
                <div className={styles.favoritesArticlesTitleBlock}>
                    <h1>Favorite articles</h1>
                    <div className={styles.decorLine}></div>
                </div>
                <div className={styles.favoritesArticlesContent}>
                    <HomePageArticles articles={filterByTag ? filterCurrentArticles : currentArticles} />
                    <Tags setFilterByTag={setFilterByTag} tags={tags} />
                </div>
            </div>
            <PaginationItem 
                current={currentPage} 
                pageSize={MAX_ARTICLES_PER_PAGE} 
                total={filterByTag ? favArticlesByTag.length : favArticles.length} 
                onChange={handlePageChange} 
            />
        </div>
    );
}

export default FavoritesArticles;
