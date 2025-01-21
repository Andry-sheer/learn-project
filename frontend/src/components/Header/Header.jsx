
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/favicon.png";
// import defaultUser from "../../assets/profile.png";
import styles from "../../styles/Header.module.scss";
import Input from "../Input/Input";
import MyButton from "../MyButtons/MyButton";
import { LiaSearchSolid } from "react-icons/lia";
import { FaMoon } from "react-icons/fa6";
// import { HiSun } from "react-icons/hi";



const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logoContainer} to="/">
          <img className={styles.logo} src={logo} alt="Logo" />
          <span className={styles.title}>Header</span>
        </Link>

        <form className={styles.search}>
          <Input
            className={styles.searchInput}
            type="text"
            placeholder="search..."
            name="search"
          />

          <MyButton
            className={styles.searchButton}
            type="submit"
            icon={<LiaSearchSolid className={styles.searchIcon}/>}
          />
        </form>

        <MyButton 
          className={styles.themeChange}
          type="button"
          icon={<FaMoon className={styles.themeChangeIcon} />}
          // icon={<HiSun />}
        />

        <div className={styles.navbar}>
          <NavLink className={({ isActive }) => isActive ? `${styles.navbarLinkActive}` : `${styles.navbarLink}`} to="/home">home</NavLink>
          <NavLink className={({ isActive }) => isActive ? `${styles.navbarLinkActive}` : `${styles.navbarLink}`} to="/about">about</NavLink>
          <NavLink className={({ isActive }) => isActive ? `${styles.navbarLinkActive}` : `${styles.navbarLink}`} to="/projects">projects</NavLink>
        </div>

        <Link className={styles.singIn} to="/sing-in">
          Sing in
        </Link>

        {/* <Link className={styles.profile} to="/profile">
          <img className={styles.profilePhoto} src={defaultUser} alt="profile photo" />
        </Link> */}
      </div>
    </header>
  )
}

export default Header