import React from "react";
import Logo from "../../components/assets/dodo.jpg"
import styles from "./DodoLogo.module.css"

const DodoLogo = () => {
    return (
        <div className={styles.dodoLogo}>
            <img src={Logo} />
        </div>
    );
}

export default DodoLogo;