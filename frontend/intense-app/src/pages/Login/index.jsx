import styles from "./style.module.css";
import CheckboxItem from "../../components/Checkbox";
import { useDispatch } from "react-redux";
import { getToken } from "../../store/slices/articles";
import { useState } from "react";

function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        if (username && password) {
            dispatch(getToken({ username, password }));
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <form
                    name="loginForm"
                    className={styles.loginForm}
                    onSubmit={handleLogin}
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
                    <button type="submit" className={styles.loginBtn}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
