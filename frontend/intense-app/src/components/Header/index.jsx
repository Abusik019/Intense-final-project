import styles from "./style.module.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <ul className={styles.header}>
      <li className={styles.headerFirstHalf}>
        <img src={logo} alt="logo"/>
        <NavLink to='/'><div>Home</div></NavLink>
        <NavLink to='/all-articles'><div>Articles</div></NavLink>
        <NavLink to='/favorites-articles'><div>Favorites</div></NavLink>
      </li>
      <li className={styles.headerSecondHalf}>
        <NavLink to='/search'><button className={styles.searchBtn}><img src={search} alt="search"/></button></NavLink>
        <NavLink to='/login'><button className={styles.loginBtn}>Login</button></NavLink>
      </li>
    </ul>
  )
}
