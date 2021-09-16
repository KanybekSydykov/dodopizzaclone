import React, { useState } from 'react';
import pizzapic from "../components/assets/smallslider/1.jpg";
import Modal from "../header/innerHeader/Modal";
import "./content.css";

export default function Content(props) {

    const [modalActive,setModalActive] = useState(false)

    let pizza = props.store.pizza;
    let combo = props.store.Combo;
    let snacks = props.store.Snacks;

    
    return (
        <div className="content">
            <h2 id= "pizzas">Пицца</h2>
            <div  className="pizzas container"  >
                
                {pizza.map((v,i)=> {
                    return (
                        <div key={i} className='pizza box' onClick={()=> setModalActive(true)}>
                    {v.img}
                    <div>
                    <h2>{v.title}</h2>
                    <p>{v.text}</p>
                    <span>{v.price}</span>
                    <button>Выбрать</button>
                    </div>
                    
                </div>
                
                    )
                })}
                <Modal active={modalActive} setActive={setModalActive} >
           <h2>Pizza info</h2>
               <img src={pizzapic}/>
           
         </Modal>
            </div>
            <h2 id= "combos">Комбо</h2>
            <div  className="combos container">
            
            {combo.map((v,i)=> {
                    return (
                        <div key={i} className='combo box'>
                    {v.img}
                    <div>
                    <h2>{v.title}</h2>
                    <p>{v.text}</p>
                    <span>{v.price}</span>
                    <button>Выбрать</button>
                    </div>
                </div>
                    )
                })}
            </div>
            <h2 id= "snacks">Закуски</h2>
            <div  className="snacks container">
            
            {snacks.map((v,i)=> {
                    return (
                        <div key={i} className='snack box'>
                    {v.img}
                    <div>
                    <h2>{v.title}</h2>
                    <p>{v.text}</p>
                    <span>{v.price}</span>
                    <button>Выбрать</button>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    )
}
