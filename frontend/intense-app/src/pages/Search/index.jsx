import styles from "./style.module.css";
import { useState } from "react";
import { SearchInput } from "../../components/SearchInput";
import { TagsSearch } from "../../components/TagsSearch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArticles } from "../../store/slices/articles";
import favoriteLogo from '../../assets/is-favorite.svg';
import notFavoriteLogo from '../../assets/not-favorite.svg'
import { Preloader } from "../../components/Preloader";

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
        const value = e.target.value;
        let clearTag = "";
        setInputValue(value);

        if(value.includes("#")){
            clearTag = value.replace("#", "").toLowerCase();
            console.log('clear tag: ' + clearTag);
        }

        const filteredArticles = articles.filter((article) => article.title.toLowerCase().includes(value.toLowerCase()));
        const filteredArticlesByTag = articles.filter((article) => article.category.title.toLowerCase().includes(clearTag));
    
 
        setArticlesResult(value.includes("#") ? filteredArticlesByTag : filteredArticles);
        // console.log("articlesResult:", filteredArticles);
        // console.log("articlesResult:", filteredArticlesByTag);
    };

    const handleTagClick = (tagName) => {
        setInputValue(tagName);
        handleInputChange({ target: { value: tagName } });
    };
    


    if (error) return <h2>{error.message}</h2>;
    if (loading && articles.length === 0) return <Preloader />;
    if (!loading && (!articles || articles.length === 0)) return <h1>No data</h1>;
    
    return (
        <div className={styles.search}>
            <SearchInput inputValue={inputValue} handleInputChange={handleInputChange}/>
            {inputValue && articlesResult.length > 0 && 
                <ul className={styles.searchResults}>
                    {articlesResult.map(article => (
                        <li key={article.id}>
                            <div className={styles.topSide}>
                                <h1>{article.author}</h1>
                                <h2>{article.category.title}</h2>
                                <h3>{article.time_to_read} min</h3>
                            </div>
                            <div className={styles.bottomSide}>
                                <div className={styles.bottomLeftSide}>
                                    <img src={article.image} alt="article"/>
                                    <a href={`/articles/${article.id}`}>{article.title}</a>
                                </div>
                                <img src={article.is_favorite ? favoriteLogo : notFavoriteLogo} alt="favorite status"/>
                            </div>
                        </li>
                    ))}
                </ul>
            }
            <TagsSearch handleTagClick={handleTagClick}/>
        </div>
    );
}

export default Search;
