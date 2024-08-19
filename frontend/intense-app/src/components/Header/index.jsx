import styles from "./style.module.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    console.log(isLogin);

    useEffect(()  =>  {
        setIsLogin(Cookies.get('token') ? true : false)
    }, [])

    const handleSignOut = () => {
        Cookies.remove('token');
        setIsLogin(false);
        navigate('/login');
    };

    return (
        <ul className={styles.header}>
            <li className={styles.headerFirstHalf}>
                <img src={logo} alt="logo" />
                <NavLink to="/">
                    <div>Home</div>
                </NavLink>
                <NavLink to="/articles">
                    <div>Articles</div>
                </NavLink>
                {isLogin && (
                    <NavLink to="/favorites-articles">
                        <div>Favorites</div>
                    </NavLink>
                )}
            </li>
            <li className={styles.headerSecondHalf}>
                <NavLink to="/search">
                    <button className={styles.searchBtn}>
                        <img src={search} alt="search" />
                    </button>
                </NavLink>
                {!isLogin ? (
                    <NavLink to="/login">
                        <button className={styles.loginBtn}>Login</button>
                    </NavLink>
                ) : (
                    <div className={styles.userAvaWrapper}>
                        <button
                            className={styles.userAva}
                            onMouseEnter={() => 
                                setIsActive(true)
                            }
                            onMouseLeave={() =>
                                setIsActive(false)
                            }
                        >
                            <img src="https://imagez.tmz.com/image/f4/4by3/2022/07/17/f4158575298743ce945625c049a8fab2_md.jpg" />
                        </button>
                        <div
                            className={styles.userActions}
                            style={{ display: isActive ? "block" : "none" }}
                            onMouseMove={() => 
                                setIsActive(true)
                            }
                            onMouseLeave={() =>
                                setIsActive(false)
                            }
                        >
                            <h1 onClick={() => navigate('/profile')}>Arthur Black</h1>
                            <h2>@arthurblack</h2>
                            <div className={styles.userActionsLine}></div>
                            <div className={styles.userActionsTextBlock}>
                                <NavLink to="/create-article">
                                    <h3>Write an Article</h3>
                                </NavLink>
                                <NavLink to="liked-articles">
                                    <h4>Liked</h4>
                                </NavLink>
                                <h5 onClick={handleSignOut}>Sign out</h5>
                            </div>
                        </div>
                    </div>
                )}
            </li>
        </ul>
    );
};
