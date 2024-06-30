import styles from "./style.module.css";
import { tags } from '../../tags';
import { useState } from "react";
import { SearchInput } from "../../components/SearchInput";
import { TagsSearch } from "../../components/TagsSearch";

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
            <TagsSearch handleTagClick={handleTagClick}/>
        </div>
    );
}

export default Search;
