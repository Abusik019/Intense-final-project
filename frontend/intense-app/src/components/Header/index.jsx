import styles from "./style.module.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

export const Header = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [isActive, setIsActive] = useState(false)

  return (
    <ul className={styles.header}>
      <li className={styles.headerFirstHalf}>
        <img src={logo} alt="logo"/>
        <NavLink to='/'><div>Home</div></NavLink>
        <NavLink to='/articles'><div>Articles</div></NavLink>
        <NavLink to='/favorites-articles'><div>Favorites</div></NavLink>
      </li>
      <li className={styles.headerSecondHalf}>
        <NavLink to='/search'><button className={styles.searchBtn}><img src={search} alt="search"/></button></NavLink>
        {!isLogin ? (
          <NavLink to='/login'>
            <button className={styles.loginBtn}>Login</button>
          </NavLink>
        ) : (
            <div className={styles.userAvaWrapper}>
              <button className={styles.userAva} onClick={() => setIsActive(prevState => !prevState)}><img src="https://imagez.tmz.com/image/f4/4by3/2022/07/17/f4158575298743ce945625c049a8fab2_md.jpg"/></button>
              <div className={styles.userActions} style={{display: isActive ? 'block' : 'none'}}>
                  <h1>Arthur Black</h1>
                  <h2>@arthurblack</h2>
                  <div className={styles.userActionsLine}></div>
                  <div className={styles.userActionsTextBlock}>
                    <NavLink to='/create-article'><h3>Write an Article</h3></NavLink>
                    <NavLink to='liked-articles'><h4>Liked</h4></NavLink>
                    <NavLink><h5>Sign out</h5></NavLink>
                  </div>
              </div>
            </div>
        )}
      </li>
    </ul>
  )
}
