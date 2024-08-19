import styles from "./style.module.css";
import { TagsSearch } from "../../components/TagsSearch/index";
import { UploadPhoto } from "../../components/UploadPhoto";
import { useState } from "react";

function CreateArticle() {
    const [textareaValue, setTextareaValue] = useState("");

    const handleTagClick = (tagName) => {
        setTextareaValue(textareaValue + tagName);
    };

    const handleTextareaChange = (e) => {
        setTextareaValue(e.target.value);
    };

    return (
        <div className={styles.createArticle}>
            <div className={styles.createArticleContent}>
                <h1>New Article</h1>
                <input
                    className={styles.titleArticleInput}
                    type="text"
                    placeholder="Title"
                />
                <textarea
                    className={styles.descArticleInput}
                    type="text"
                    placeholder="Description"
                    value={textareaValue}
                    onChange={handleTextareaChange}
                />
                <TagsSearch handleTagClick={handleTagClick} />
                <UploadPhoto />
                <button className={styles.saveArticle}>Save</button>
            </div>
        </div>
    );
}

export default CreateArticle;
