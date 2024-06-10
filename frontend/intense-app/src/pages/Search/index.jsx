import styles from "./style.module.css";
import { Header } from '../../components/Header';
import { tags } from '../../tags';
import { useState } from "react";
import searchImg from "../../assets/search.png";

const copyTags = tags.map((tag) => {
    return { ...tag, name: `#${tag.name}` };
});

function Search() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleTagClick = (tagName) => {
        setInputValue(prevValue => `${prevValue} ${tagName}`);
    };

    return (
        <div className={styles.search}>
            <Header />
            <div className={styles.inputSearchWrapper}>
                <input
                    onChange={handleInputChange}
                    type="text"
                    className={styles.inputSearch}
                    value={inputValue}
                    placeholder="Find the topics you care about..."
                />
                <button className={styles.searchBtn}><img src={searchImg}/></button>
            </div>
            <ul className={styles.tagsContainer}>
                {copyTags.map((tag) => (
                    <li key={tag.id}>
                        <button onClick={() => handleTagClick(tag.name)}>{tag.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
