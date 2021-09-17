import React from "react";
import Logo from "../../components/assets/dodo.jpg"
import "./DodoLogo.css"

const DodoLogo = () => {
    return (
        <div className="col-3 logo">
          <a href="#home">  <img src={Logo} /> </a>
        </div>
    );
}

export default DodoLogo;