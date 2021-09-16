import React from "react";
import Scrollable from "./Scrollable";
import "./scrollableContainer.css";






const ScrollableContainer = (props) =>{

    const items = props.items;
    return (
    <div className='container1'>
        <Scrollable _class='items'>{
            items.map((v, i) => { 
                return (    
                <div key={i} className='item'>
                    {v.img}
                    <div>
                    <h2>{v.title}</h2>
                    <p>{v.text}</p>
                    </div>
                </div>
                )
            })
        }
        </Scrollable>
    </div>
    );

}

export default ScrollableContainer;