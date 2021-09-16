import React,{useState} from "react";
import styles from './header.module.css';
import CallToItem from "./innerHeader/callToItem";
import DeliveryTime from "./innerHeader/DeliveryTime";
import DodoLogo from "./innerHeader/DodoLogo";
import ModalView from "./innerHeader/ModalView";
import Nav from "./nav/navbar";


function Header() {
    // const [modalActive,setModalActive] = useState (false);
    return (
        <div>
<header className={styles.Header}>
            <DodoLogo />
            <DeliveryTime />
            <CallToItem />
            <ModalView />
        </header>
        <Nav />
        </div>
        
        
    );
}

export default Header;