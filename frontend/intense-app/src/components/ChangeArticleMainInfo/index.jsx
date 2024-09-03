import { useState } from "react";
import styles from "./style.module.css";

export const ChangeArticleMainInfo = ({ title, author, time, category, desc, onSave, showError }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newAuthor, setNewAuthor] = useState(author);
    const [newTime, setNewTime] = useState(time);
    const [newCategory, setNewCategory] = useState(category);
    const [newDesc, setNewDesc] = useState(desc);

    const handleSaveClick = () => {
        onSave({
            title: newTitle,
            author: newAuthor,
            time: newTime,
            category: newCategory,
            desc: newDesc
        });
    };

    return (
        <div className={styles.changeArticle}>
            <input
                className={styles.articleTitle}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <div className={styles.inputsWrapper}>
                <input
                    className={styles.articleAuthor}
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                />
                <input
                    className={styles.articleTime}
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)
                    }
                />
            </div>
            <input
                className={styles.articleCategory}
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
            />
            {showError && <div className={styles.categoryError}>This category does not exist</div>}
            <textarea
                className={styles.articleDesc}
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
            />
            <button onClick={handleSaveClick}>Save</button>
        </div>
    );
};

