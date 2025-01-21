
import styles from "../styles/SingUp.module.scss";
import logo from "../assets/favicon.png";

const SingUp = () => {
  return (
    <div className={styles.singup}>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.containerLeft}>
            <h1 className={styles.title}>welcome to site</h1>
            <img className={styles.singUpLogo} src={logo} alt="logo of sing-up page" />
            <p className={styles.subTitle}>my learning fullstack project from react-junior developer</p>
          </div>

          <div className={styles.containerRight}>
            <form className={styles.singUpForm}>
              <input className={styles.inputSingUp} name="name" type="text" />
              <input className={styles.inputSingUp} name="email" type="email" />
              <input className={styles.inputSingUp} name="password" type="password" />
              <button className={styles.singUpButton}>Sing up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingUp