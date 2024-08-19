import styles from "./style.module.css";
import homeBigImage from "../../assets/home-big-picture.png";
import { HomePageArticles } from '../../components/HomeArticles';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArticles, getTopThreeArticles } from "../../store/slices/articles";


function HomePage() {
    const dispatch = useDispatch();
    const topThreeArticles = useSelector((state) => state.articles.top_three_list);
    const articles = useSelector((state) => state.articles.list);
    const loading = useSelector((state) => state.articles.loading);
    const error = useSelector((state) => state.articles.error);
    const newestArticles = articles?.filter(item => item.id >= 2) || [];


    useEffect(() => {
        dispatch(getArticles());
        dispatch(getTopThreeArticles());
    }, [dispatch]);

    if (error) return <h2>{error.message}</h2>;
    if (loading) return <h2>Loading...</h2>;
    if (!loading && ((!topThreeArticles || topThreeArticles.length === 0) && (!articles || articles.length === 0))) return <h1>No data</h1>;

    return (
        <div className={styles.homePage}>
            <div className={styles.homeContent}>
                <img
                    className={styles.homeBigImg}
                    src={homeBigImage}
                    alt="featured article"
                />
                <div className={styles.topArticles}>
                    <div className={styles.topArticlesTitleBlock}>
                        <h1>Top 3</h1>
                        <div className={styles.decorLine}></div>
                    </div>
                    <HomePageArticles articles={topThreeArticles || []} />
                </div>
                <div className={styles.newArticles}>
                    <div className={styles.newArticlesTitleBlock}>
                        <h1>Newest</h1>
                        <div className={styles.decorLine}></div>
                    </div>
                    <HomePageArticles articles={newestArticles || []}/>
                </div>
                <NavLink to='/articles'><button className={styles.seeAllBtn}>See all</button></NavLink>
            </div>
        </div>
    );
}

export default HomePage;
