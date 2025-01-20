
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
      <div className={styles.header__container}>
        <Link className={styles.header__logo} to="/">
          <img className={styles.header__logo_img} src={logo} alt="Logo" />
          <span className={styles.header__logo_title}>Header</span>
        </Link>

        <form className={styles.header__search}>
          <Input
            className={styles.header__search_input}
            type="text"
            placeholder="search..."
            name="search"
          />

          <MyButton
            className={styles.header__search_button}
            type="submit"
            icon={<LiaSearchSolid className={styles.header__search_icon}/>}
          />
        </form>

        <MyButton 
          className={styles.header__themeChange}
          type="button"
          icon={<FaMoon className={styles.header__themeChange_icon} />}
          // icon={<HiSun />}
        />

        <div className={styles.header__navbar}>
          <NavLink className={({ isActive }) => isActive ? `${styles.header__navbar_link_active}` : `${styles.header__navbar_link}`} to="/home">home</NavLink>
          <NavLink className={({ isActive }) => isActive ? `${styles.header__navbar_link_active}` : `${styles.header__navbar_link}`} to="/about">about</NavLink>
          <NavLink className={({ isActive }) => isActive ? `${styles.header__navbar_link_active}` : `${styles.header__navbar_link}`} to="/projects">projects</NavLink>
        </div>

        <Link className={styles.header__singIn} to="/sing-in">
          Sing in
        </Link>

        {/* <Link className={styles.header__profile} to="/profile">
          <img className={styles.header__profile_photo} src={defaultUser} alt="profile photo" />
        </Link> */}
      </div>
    </header>
  )
}

export default Header