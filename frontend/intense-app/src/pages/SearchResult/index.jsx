import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { HomePageArticles } from "../../components/HomeArticles";
import { Tags } from '../../components/Tags';
import { tags } from '../../tags';

function SearchResult() {
    const [inputValue, setInputValue] = useState("");

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
