import styles from "./style.module.css";
import { HomePageArticles } from "../../components/HomeArticles";
import { Tags } from "../../components/Tags";
import PaginationItem from '../../components/Pagination';
import { tags } from '../../tags';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { getArticles } from "../../store/slices/articles";

const MAX_ARTICLES_PER_PAGE = 8;

function AllArticles() {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles.list);
    const loading = useSelector((state) => state.articles.loading);
    const error = useSelector((state) => state.articles.error);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getArticles());
    }, [dispatch]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * MAX_ARTICLES_PER_PAGE;
    const currentArticles = Array.isArray(articles) ? articles.slice(startIndex, startIndex + MAX_ARTICLES_PER_PAGE) : [];

    if (error) return <h2>{error.message}</h2>;
    if (loading) return <h2>Loading...</h2>;
    if (!loading && (!articles || articles.length === 0)) return <h1>No data</h1>;

    return (
        <div className={styles.allArticles}>
            <div className={styles.allArticlesContainer}>
                <div className={styles.allArticlesTitleBlock}>
                    <h1>All articles</h1>
                    <div className={styles.decorLine}></div>
                </div>
                <div className={styles.allArticlesContent}>
                    <HomePageArticles articles={currentArticles} />
                    <Tags tags={tags} />
                </div>
            </div>
            <PaginationItem 
                current={currentPage} 
                pageSize={MAX_ARTICLES_PER_PAGE} 
                total={articles.length} 
                onChange={handlePageChange} 
            />
        </div>
    );
}

export default AllArticles;
