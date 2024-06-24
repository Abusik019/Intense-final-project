import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { HomePageArticles } from "../../components/HomeArticles";
import { Tags } from '../../components/Tags';
import { tags } from '../../tags';

function SearchResult() {
    const [inputValue, setInputValue] = useState("");
    const searchResultsArticles = [
        {
            id: 1,
            category: "MINIMALISM",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Leslie Pena",
            date: "April 25, 2012 (6 mins read)",
            description:
                "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
            image: "../../../src//assets/example-article.png",
        },
        {
            id: 2,
            category: "MINIMALISM",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Leslie Pena",
            date: "April 25, 2012 (6 mins read)",
            description:
                "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
            image: "../../../src//assets/example-article.png",
        },
        {
            id: 3,
            category: "MINIMALISM",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Leslie Pena",
            date: "April 25, 2012 (6 mins read)",
            description:
                "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
            image: "../../../src//assets/example-article.png",
        },
        {
            id: 4,
            category: "MINIMALISM",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Leslie Pena",
            date: "April 25, 2012 (6 mins read)",
            description:
                "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
            image: "../../../src//assets/example-article.png",
        },
        {
            id: 5,
            category: "MINIMALISM",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Leslie Pena",
            date: "April 25, 2012 (6 mins read)",
            description:
                "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
            image: "../../../src//assets/example-article.png",
        },
        {
            id: 6,
            category: "MINIMALISM",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Leslie Pena",
            date: "April 25, 2012 (6 mins read)",
            description:
                "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
            image: "../../../src//assets/example-article.png",
        },
        {
            id: 7,
            category: "MINIMALISM",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Leslie Pena",
            date: "April 25, 2012 (6 mins read)",
            description:
                "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
            image: "../../../src//assets/example-article.png",
        },
        {
            id: 8,
            category: "MINIMALISM",
            title: "Culpa sit Laboris Exercitation ea Fugiat",
            author: "Leslie Pena",
            date: "April 25, 2012 (6 mins read)",
            description:
                "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.",
            image: "../../../src//assets/example-article.png",
        },
    ];

    useEffect(() => {
        const storedValue = localStorage.getItem("inputValue");
        if (storedValue) {
            setInputValue(storedValue);
        }
    }, []);

    return (
        <div className={styles.searchResult}>
            <input
                className={styles.inputResultValue}
                value={inputValue}
                readOnly
            />
            <div className={styles.searchResultsTitleBlock}>
                <h1>Search results</h1>
                <div className={styles.decorLine}></div>
            </div>
            <div className={styles.searchResultArticlesContent}>
                <HomePageArticles articles={searchResultsArticles} />
                <Tags tags={tags} />
            </div>
        </div>
    );
}

export default SearchResult;
