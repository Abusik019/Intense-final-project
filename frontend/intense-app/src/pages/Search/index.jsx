import styles from "./style.module.css";
import { useState } from "react";
import { SearchInput } from "../../components/SearchInput";
import { TagsSearch } from "../../components/TagsSearch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "../../store/slices/articles";

function Search() {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles.list);
    const loading = useSelector((state) => state.articles.loading);
    const error = useSelector((state) => state.articles.error);
    const [inputValue, setInputValue] = useState(""); 
    const [articlesResult, setArticlesResult] = useState([]);

    useEffect(() => {
        dispatch(getArticles())
            .unwrap()
            .then((result) => {
                console.log(result); 
            })
            .catch((error) => {
                console.error("Ошибка при загрузке статей:", error);
            });
    }, [dispatch]);
    

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleTagClick = (tagName) => {
        setInputValue(inputValue + tagName);
    };


    if (error) return <h2>{error.message}</h2>;
    if (loading && articles.length === 0) return <h2>Loading...</h2>;
    if (!loading && (!articles || articles.length === 0)) return <h1>No data</h1>;
    
    return (
        <div className={styles.search}>
            <SearchInput inputValue={inputValue} handleInputChange={handleInputChange}/>
            <TagsSearch handleTagClick={handleTagClick}/>
        </div>
    );
}

export default Search;
