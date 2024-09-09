import styles from "./style.module.css";
import { TagsSearch } from "../../components/TagsSearch";
import { UploadPhoto } from "../../components/UploadPhoto";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createArticle, getCategories } from "../../store/slices/articles";
import InputNumberElement from './../../components/InputNumber';
import { Preloader } from "../../components/Preloader";

function CreateArticle() {
    const [title, setTitle] = useState("");
    const [inputNumber, setInputNumber] = useState(1);
    const [category, setCategory] = useState("");
    const [textareaValue, setTextareaValue] = useState("");
    const [image, setImage] = useState("");
    const categories = useSelector((state) => state.articles.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        console.log(textareaValue);
        const value = textareaValue.match(/^#\w+/gi);
        if (value && value.length > 0) {
            const new_value = value[0].replace("#", "");
            setCategory(new_value);
        } else {
            setCategory("");
        }
    }, [textareaValue]);

    const handleTextareaChange = (e) => {
        setTextareaValue(e.target.value);
    };

    const getInputNumberValue = (value) => {
        setInputNumber(value);
    }

    function handleSaveClick() {
        const this_category = categories.find((item) => item.title === category);

        if (!this_category) {
            console.error("Category not found");
            return;
        }
    
        const article = {
            title,
            desc: textareaValue,
            time_to_read: inputNumber,
            categoryTitle: category,
            category_id: this_category.id,
            image
        };

        dispatch(createArticle(article));
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
                <TagsSearch handleTagClick={(tagName) => setTextareaValue(textareaValue + tagName)} />
                <UploadPhoto setImage={setImage}/>
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