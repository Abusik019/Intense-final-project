import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import searchImg from "../../assets/search.png";

export const SearchInput = ({ inputValue, handleInputChange }) => {
    return (
        <div className={styles.inputSearchWrapper}>
            <input
                onChange={handleInputChange}
                type="text"
                className={styles.inputSearch}
                value={inputValue}
                placeholder="Find the topics you care about..."
            />
            <NavLink to="/search-results">
                <button className={styles.searchBtn} onClick={() => {localStorage.setItem('inputValue', inputValue)}}>
                    <img src={searchImg} />
                </button>
            </NavLink>
        </div>
    );
};
