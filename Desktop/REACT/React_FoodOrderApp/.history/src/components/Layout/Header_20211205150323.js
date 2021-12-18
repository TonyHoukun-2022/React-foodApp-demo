import React from "react"
import headerImg from "../../assets/header.jpeg"
import styles from "./header/module.css"
const Header = (props) => {
  return (
    <>
          <header className={styles.header}>
              <h1>ReactMeals</h1>
              <button>Cart</button>
          </header>
          <div className={styles.}>
              <img src={headerImg} alt="header-image" />
          </div>
    </>
  )
}
export default Header
