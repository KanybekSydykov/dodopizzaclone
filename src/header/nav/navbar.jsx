import React from "react";
import styles from "./navbar.module.css";
import {NavLink} from "react-router-dom"; 


function Nav() {
    return(
        <nav className={styles.nav}>
            <a href="pizzas">Пицца</a>
            <a href="#combos">Комбо</a>
            <a href="#snacks">Закуски</a>
            <a href="">Десерты</a>
            <a href="">Напитки</a>
            <a href="">Другие товары</a>     
            <NavLink to="/discount">Акции</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
            <NavLink to="/about">О нас</NavLink>
        </nav>
    );
}

export default Nav;