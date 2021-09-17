import React,{useState} from "react";
import ScrollableContainer from "./components/Scrollable/ScrollableContainer";
import Slider from "./components/slider/Slider";
import Header from "./header/header";
import {Route} from "react-router-dom";
import Content from "./content/content";
import AboutUs from "./components/aboutUs/aboutUs";
import Contacts from "./components/contacts/contacts";
import Discount from "./components/discount/discount";


const App = (props) => {
  const [modalActive,setModalActive] = useState (false);
  return (
    <div className="container app-wrapper">
      <main>
      <Header />
      <Slider />
    <ScrollableContainer items = {props.store.scrollableItems}/>

    <div className="content-wrapper"> 
    <Route path="" render={()=> <Content store={props.store}/> }/>
    <Route path="/about" render={()=> <AboutUs /> }/>
    <Route path="/contacts" render={()=> <Contacts /> }/>
    <Route path="/discout" render={()=> <Discount /> }/>
    
    </div>
      </main>
    </div>
  )
}

export default App;