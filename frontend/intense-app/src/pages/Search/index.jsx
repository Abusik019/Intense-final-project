import styles from "./style.module.css";
import { tags } from '../../tags';
import { useState } from "react";
import { SearchInput } from "../../components/SearchInput";

const copyTags = tags.map((tag) => {
    return { ...tag, name: `#${tag.name}` };
});

function Search() {
    const [inputValue, setInputValue] = useState(""); 

    const handleInputChange = (event) => {
        setInputValue(newValue);
    };
    

    const handleTagClick = (tagName) => {
        setInputValue(prevValue => `${prevValue} ${tagName}`);
    };

    return (
        <div className={styles.search}>
            <SearchInput inputValue={inputValue} handleInputChange={handleInputChange}/>
            <ul className={styles.tagsContainer}>
                {copyTags.map((tag) => (
                    <li key={tag.id}>
                        <button onClick={() => handleTagClick(tag.name)}
                        >{tag.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
