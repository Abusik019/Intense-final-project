import styles from './style.module.css';
import AddAva from '../../components/addAva';

function SignUp() {
  return (
    <div className={styles.signUp}>
        <div className={styles.signUpContainer}>
            <form name='signUpForm' className={styles.signUpForm}>
                <h1>Welcome</h1>
                <p>Sign up to get the most out of nuntium.</p>
                <AddAva />
                <input className={styles.inputUsername} type='text' placeholder='Username'/>
                <input className={styles.inputEmail} type='email' placeholder='Email'/>
                <input className={styles.inputPassword} type='password' placeholder='Password'/>
                <input className={styles.inputPassword} type='password' placeholder='Confirm password'/>
                <button className={styles.startBtn}>Start</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp;