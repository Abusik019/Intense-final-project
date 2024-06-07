import styles from "./style.module.css";
import { Header } from "../../components/Header";
import { HomePageArticles } from "../../components/HomeArticles";
import { Tags } from "../../components/Tags";
import PaginationItem from '../../components/Pagination';

const allArticles = [
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
    {
        id: 5, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
    {
        id: 6, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
    {
        id: 7, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
    {
        id: 8, 
        category: 'MINIMALISM',
        title: 'Culpa sit Laboris Exercitation ea Fugiat',
        author: 'Leslie Pena',
        date: 'April 25, 2012 (6 mins read)',
        description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
        image: '../../../src//assets/example-article.png'
    },
]

const tags = [
    {
        id: 1,
        name: 'Technology'
    },
    {
        id: 2,
        name: 'Technology'
    },
    {
        id: 3,
        name: 'Technology'
    },
    {
        id: 4,
        name: 'Technology'
    },
    {
        id: 5,
        name: 'Technology'
    },
    {
        id: 6,
        name: 'Technology'
    },
    {
        id: 7,
        name: 'Technology'
    },
    {
        id: 8,
        name: 'Technology'
    },
    {
        id: 9,
        name: 'Technology'
    },
    {
        id: 10,
        name: 'Technology'
    },
    {
        id: 11,
        name: 'Technology'
    },
    {
        id: 12,
        name: 'Technology'
    },
    {
        id: 13,
        name: 'Technology'
    },
    {
        id: 14,
        name: 'Technology'
    },
    {
        id: 15,
        name: 'Technology'
    },
    {
        id: 16,
        name: 'Technology'
    },
    {
        id: 17,
        name: 'Technology'
    },
    {
        id: 18,
        name: 'Technology'
    },
    {
        id: 19,
        name: 'Technology'
    },
    {
        id: 20,
        name: 'Technology'
    },
]

function AllArticles() {
    return (
        <div className={styles.allArticles}>
            <Header />
            <div className={styles.allArticlesContainer}>
                <div className={styles.allArticlesTitleBlock}>
                    <h1>All articles</h1>
                    <div className={styles.decorLine}></div>
                </div>
                <div className={styles.allArticlesContent}>
                    <HomePageArticles articles={allArticles}/>
                    <Tags tags={tags} />
                </div>
            </div>
            <PaginationItem />
        </div>
    );
}

export default AllArticles;
