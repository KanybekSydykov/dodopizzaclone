import React from "react";
import"./navbar.css";
import {NavLink} from "react-router-dom"; 


function Nav() {
    return(
        <div className="navbar navbar-fixed-top">
        <nav className="nav">
            <a class="link" href="#pizzas">Пицца</a>
            <a class="link" href="#combos">Комбо</a>
            <a class="link" href="#snacks">Закуски</a>
            <a class="link" href="">Десерты</a>
            <a class="link" href="">Напитки</a>
            <a class="link" href="">Другие товары</a>     
            <NavLink class="link" to="/discount">Акции</NavLink>
            <NavLink class="link" to="/contacts">Контакты</NavLink>
            <NavLink class="link" to="/about">О нас</NavLink>
        </nav>
        </div>
// {/* <nav class="navbar navbar-expand-lg ">
//   <div class="container-fluid">
//     {/* <a class="navbar-brand" href="#">Navbar</a> */}
//     {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button> */}
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div class="navbar-nav justify-content-center">
//         <a class="nav-link" aria-current="page" href="#pizzas">Пицца</a>
//         <a class="nav-link" href="#snacks">Закуски</a>
//         <a class="nav-link" href="#combos">Комбо</a>
//         <a class="nav-link" href="#">Disabled</a>
//         <a class="nav-link" href="#">Disabled</a>
//         {/* <NavLink class="nav-link" to="/pizzas">Disabled</NavLink>
//         <NavLink class="nav-link" to="/discount">Disabled</NavLink>
//         <NavLink class="nav-link" to="/discount">Disabled</NavLink> */}
//       </div>
//     </div>
//   </div>
// </nav> */

    );
}

export default Nav;