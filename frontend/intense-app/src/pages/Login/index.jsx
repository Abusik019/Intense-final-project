import styles from './style.module.css';
import { Header } from '../../components/Header';
import CheckboxItem from '../../components/Checkbox';

function Login() {
  return (
    <div className={styles.login}>
        <div className={styles.loginContainer}>
            <form name='loginForm' className={styles.loginForm}>
                <h1>Sign In</h1>
                <p>Sign in to get the most out of nuntium.</p>
                <input className={styles.inputUsername} type='text' placeholder='Username'/>
                <input className={styles.inputPassword} type='password' placeholder='Password'/>
                <div className={styles.wrapper}>
                    <CheckboxItem />
                    <button className={styles.forgotPassword}>Forgot Password?</button>
                </div>
                <button className={styles.loginBtn}>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login;