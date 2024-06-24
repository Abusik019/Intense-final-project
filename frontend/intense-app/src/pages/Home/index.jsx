import { Header } from "../../components/Header";
import styles from "./style.module.css";
import homeBigImage from "../../assets/home-big-picture.png";
import { HomePageArticles } from '../../components/HomeArticles';
import { NavLink } from "react-router-dom";

const topArticles = [
    {
        id: 1, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
    {
        id: 2, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
    {
        id: 3, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
]

const newArticles = [
    {
        id: 1, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
    {
        id: 2, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
    {
        id: 3, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
    {
        id: 4, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
]

function HomePage() {
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
                    <HomePageArticles articles={topArticles} />
                </div>
                <div className={styles.newArticles}>
                    <div className={styles.newArticlesTitleBlock}>
                        <h1>Newest</h1>
                        <div className={styles.decorLine}></div>
                    </div>
                    <HomePageArticles articles={newArticles}/>
                </div>
                <NavLink to='/all-articles'><button className={styles.seeAllBtn}>See all</button></NavLink>
            </div>
        </div>
    );
}

export default HomePage;
