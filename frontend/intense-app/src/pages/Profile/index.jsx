import styles from './style.module.css'
import myLink from '../../assets/my-link.png'
import telegram from '../../assets/telegram.svg'
import linkedin from '../../assets/linkedin.svg'
import { HomePageArticles } from '../../components/HomeArticles';
import { tags } from '../../tags';
import { Tags } from '../../components/Tags';
import PaginationItem from '../../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getMyInfo } from '../../store/slices/articles'


function Profile() {
    const dispatch = useDispatch();
    const myInfo = useSelector((state) =>  state.articles.my_info);
    const loading = useSelector((state) => state.articles.loading);
    const error = useSelector((state) => state.articles.error);

    console.log(myInfo);

    useEffect(() => {
        dispatch(getMyInfo());
    }, [dispatch])

    if (error) return <h2>{error.message}</h2>;
    if (loading) return <h2>Loading...</h2>;


    return (
        <div className={styles.profile}>
            <div className={styles.userBio}>
                <img src={myInfo.image}/>
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
                {/* <HomePageArticles articles={allArticles}/> */}
                <Tags tags={tags} />
            </div>
            <PaginationItem />
        </div>
    )
}

export default Profile