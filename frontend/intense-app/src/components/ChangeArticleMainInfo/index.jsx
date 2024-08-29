import { useState } from "react";
import styles from "./style.module.css";

export const ChangeArticleMainInfo = ({ title, author, time, category, desc }) => {
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newTime, setNewTime] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [newDesc, setNewDesc] = useState("");

    console.log(newTitle, newAuthor,newTime, newCategory, newDesc);

    return (
        <div className={styles.changeArticle}>
            <input className={styles.articleTitle} defaultValue={title} onChange={(e) => setNewTitle(e.target.value)}/>
            <div className={styles.inputsWrapper}>
                <input className={styles.articleAuthor} defaultValue={author} onChange={(e) => setNewAuthor(e.target.value)}/>
                <input className={styles.articleTime} defaultValue={time} onChange={(e) => setNewTime(e.target.value)}/>
            </div>
            <input className={styles.articleCategory} defaultValue={category} onChange={(e) => setNewCategory(e.target.value)}/>
            <textarea className={styles.articleDesc} defaultValue={desc} onChange={(e) => setNewDesc(e.target.value)}/>
        </div>
    );
};
