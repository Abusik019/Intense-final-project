import styles from './style.module.css'
import myLink from '../../assets/my-link.png'
import telegram from '../../assets/telegram.svg'
import linkedin from '../../assets/linkedin.svg'
import { HomePageArticles } from '../../components/HomeArticles';
import { tags } from '../../tags';
import { Tags } from '../../components/Tags';
import PaginationItem from '../../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { getMyInfo, getMyPosts } from '../../store/slices/articles'
import { Preloader } from '../../components/Preloader';

const MAX_ARTICLES_PER_PAGE = 8;

function Profile() {
    const dispatch = useDispatch();
    const myArticles = useSelector((state) => state.articles.list);
    const myInfo = useSelector((state) =>  state.articles.my_info);
    const loading = useSelector((state) => state.articles.loading);
    const error = useSelector((state) => state.articles.error);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getMyInfo());
        dispatch(getMyPosts())
    }, [dispatch])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * MAX_ARTICLES_PER_PAGE;
    const currentArticles = Array.isArray(myArticles) ? myArticles.slice(startIndex, startIndex + MAX_ARTICLES_PER_PAGE) : [];

    if (error) return <h2>{error.message}</h2>;
    if (loading) return <Preloader />;
    if (!loading && (!myArticles || myArticles.length === 0)) return <h1>No data</h1>;


    return (
        <div className={styles.profile}>
            <div className={styles.userBio}>
                <img src={`http://127.0.0.1:8000${myInfo.image}`}/>
                <div className={styles.userBioTextBlock}>
                    <h1>{myInfo.first_name} {myInfo.last_name}</h1>
                    <h2>{myInfo.username}</h2>
                    <h3>{myInfo.about_me}</h3>
                    <div className={styles.profileLinks}>
                        <a href={myInfo.linkedin_link || '#'}><img src={linkedin}/></a>
                        <a href={myInfo.tg_link || '#'}><img src={telegram}/></a>
                        <a href={myInfo.link || '#'}><img src={myLink}/></a>
                    </div>
                </div>
            </div>
            <div className={styles.myArticlesTitleBlock}>
                <h1>My articles</h1>
                <div className={styles.decorLine}></div>
            </div>
            <div className={styles.myArticlesContent}>
                <HomePageArticles articles={currentArticles} />
                <Tags tags={tags} />
            </div>
            <PaginationItem 
                current={currentPage} 
                pageSize={MAX_ARTICLES_PER_PAGE} 
                total={myArticles.length} 
                onChange={handlePageChange} 
            />
        </div>
    )
}

export default Profile