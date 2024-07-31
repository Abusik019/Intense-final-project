import styles from './style.module.css'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import profile from '../../assets/profile.png'
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
        dispatch(getMyInfo);
    }, [dispatch])

    // if (error) return <h2>{error.message}</h2>;
    // if (loading) return <h2>Loading...</h2>;
    // if (!loading) return <h1>No data</h1>;


    return (
        <div className={styles.profile}>
            <div className={styles.userBio}>
                <img src={profile}/>
                <div className={styles.userBioTextBlock}>
                    <h1>Arthur Black</h1>
                    <h2>@arthurblack</h2>
                    <h3>Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.</h3>
                    <div className={styles.profileLinks}>
                        <a href='#'><img src={linkedin}/></a>
                        <a href='#'><img src={instagram}/></a>
                        <a href='#'><img src={twitter}/></a>
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