import React,{useState} from "react";
import "./header.css";
import CallToItem from "./innerHeader/callToItem";
import DeliveryTime from "./innerHeader/DeliveryTime";
import DodoLogo from "./innerHeader/DodoLogo";
import ModalView from "./innerHeader/ModalView";
import Nav from "./nav/navbar";


function Header() {
    // const [modalActive,setModalActive] = useState (false);
    return (
        <div className="container" id="home">
<div className="header1">
            <DodoLogo />
            <DeliveryTime />
            <CallToItem />
            <ModalView />
        
        
        </div>
        <Nav />
        </div>
        
        
    );
}

export default Header;