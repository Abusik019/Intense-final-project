import styles from "./style.module.css";
import { TagsSearch } from "../../components/TagsSearch";
import { UploadPhoto } from "../../components/UploadPhoto";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createArticle, getCategories } from "../../store/slices/articles";
import InputNumberElement from './../../components/InputNumber/index';

function CreateArticle() {
    const [title, setTitle] = useState("");
    const [inputNumber, setInputNumber] = useState(1);
    const [category, setCategory] = useState("");
    const [textareaValue, setTextareaValue] = useState("");
    const categories = useSelector((state) => state.articles.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const handleTagClick = (tagName) => {
        setTextareaValue(textareaValue + tagName);
    };

    const handleTextareaChange = (e) => {
        setTextareaValue(e.target.value);
        const value = e.target.value.match(/^#\w+/gi);
        if (value && value.length > 0) {
            setCategory(value[0]);
        } else {
            setCategory("");
        }
    };

    const getInputNumberValue = (value) => {
        setInputNumber(value);
    }

    function handleSaveClick(){
        console.log(title, inputNumber, textareaValue, category);
        dispatch(createArticle({title, desc: textareaValue,  time_to_read: inputNumber, categoryTitle: category}))
    }
 

    return (
        <div className={styles.createArticle}>
            <div className={styles.createArticleContent}>
                <h1>New Article</h1>
                <input
                    className={styles.titleArticleInput}
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
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
                <div className={styles.minToRead}>
                    <h1>Time to read:</h1>
                    <InputNumberElement getInputNumberValue={getInputNumberValue}/>
                </div>
                <button className={styles.saveArticle} onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default CreateArticle;
