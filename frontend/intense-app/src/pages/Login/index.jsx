import styles from "./style.module.css";
import CheckboxItem from "../../components/Checkbox";
import { useDispatch } from "react-redux";
import { getToken } from "../../store/slices/articles";
import { useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        if (username && password) {
            try {
                const resultAction = await dispatch(getToken({ username, password }));
                if (resultAction.meta.requestStatus === 'fulfilled') {

                    if (Cookies.get('token')) {
                        navigate('/profile');
                    }
                }
            } catch (error) {
                console.error('Не удалось войти:', error);
            }
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <form
                    name="loginForm"
                    className={styles.loginForm}
                >
                    <h1>Sign In</h1>
                    <p>Sign in to get the most out of nuntium.</p>
                    <input
                        className={styles.inputUsername}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className={styles.inputPassword}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.wrapper}>
                        <CheckboxItem />
                        <button type="button" className={styles.forgotPassword}>
                            Forgot Password?
                        </button>
                    </div>
                    <button type="submit" className={styles.loginBtn} onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
