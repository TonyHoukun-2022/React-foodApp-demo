import React from "react"
import headerImg from "../../assets/header.jpeg"
import styles from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"
const Header = (props) => {
  return (
    <>
          <header className={styles.header}>
              <h1>ReactMeals</h1>
              <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
          </header>
          <div className={styles['main-image']}>
              <img src={headerImg} alt="header-image" />
          </div>
    </>
  )
}
export default Header
