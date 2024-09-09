import { HomePageArticles } from "../../components/HomeArticles";
import { Tags } from "../../components/Tags";
import styles from "./style.module.css";
import PaginationItem from "../../components/Pagination";
import { tags } from "../../tags";
import { useDispatch, useSelector } from "react-redux";
import { getLikedArticles } from "../../store/slices/articles";
import { useEffect, useState } from "react";
import { Preloader } from "../../components/Preloader";

const MAX_ARTICLES_PER_PAGE = 8;

function LikedArticles() {
    const dispatch = useDispatch();
    const likedArticles = useSelector((state) => state.articles.list);
    const loading = useSelector((state) => state.articles.loading);
    const error = useSelector((state) => state.articles.error);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getLikedArticles());
    }, [dispatch]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * MAX_ARTICLES_PER_PAGE;
    const currentArticles = Array.isArray(likedArticles) ? likedArticles.slice(startIndex, startIndex + MAX_ARTICLES_PER_PAGE) : [];
    
    if (error) return <h2>{error.message}</h2>;
    if (loading) return <Preloader />;
    if (!loading && (!likedArticles || likedArticles.length === 0)) return <h1>No data</h1>;

    return (
        <div className={styles.likedArticles}>
            <div className={styles.likedArticlesContainer}>
                <div className={styles.likedArticlesTitleBlock}>
                    <h1>Liked articles</h1>
                    <div className={styles.decorLine}></div>
                </div>
                <div className={styles.likedArticlesContent}>
                    <HomePageArticles articles={currentArticles} />
                    <Tags tags={tags} />
                </div>
            </div>
            <PaginationItem 
                current={currentPage} 
                pageSize={MAX_ARTICLES_PER_PAGE} 
                total={likedArticles.length} 
                onChange={handlePageChange} 
            />
        </div>
    );
}

export default LikedArticles;
