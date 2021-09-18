import React, { useState } from 'react';
import pizzapic from "../components/assets/smallslider/1.jpg";
import Modal from "../header/innerHeader/Modal";
import "./content.css";
import combopic from "../components/assets/smallslider/3.webp"


export default function Content(props) {

    const [modalActive,setModalActive] = useState(false)

    let pizza = props.store.pizza;
    let combo = props.store.Combo;
    let snacks = props.store.Snacks;

    
    return (
        <div className="content">
            <h2 id= "pizzas" className="h2">Пицца</h2>
            <div  className="pizzas"  >
                
                {pizza.map((v,i)=> {
                    return (
                        // onClick={()=> setModalActive(true)} key={i}
                        <div key={i}  className='card'  >
                            
                    <img src={pizzapic} className="card-img-top pizza-img"  onClick={()=> setModalActive(true)}/>
                    <div className="card-body" >
                    <h2 className="h2 card-title">{v.title}</h2>
                    
                    <p className="card-text">{v.text} {v.price}</p>
                    <div><button className="btn button" >Выбрать</button>
                    <Modal active={modalActive} setActive={setModalActive} ><div>some content here</div></Modal></div>
                    
                    </div>
                    
                </div>
                
                    )
                })}
                {/* <Modal active={modalActive} setActive={setModalActive} >
           <h2>Pizza info</h2>
               <img src={pizzapic}/>
           
         </Modal> */}
            </div>
            <h2 id= "combos">Комбо</h2>
            <div  className="combospizza">
            
            {combo.map((v,i)=> {
                    return (
                        <div key={i} className='card'>
                    <img src={combopic} className="card-img-top pizza-img" />
                    <div className="card-body">
                    <h2 className="h2 card-title">{v.title}</h2>
                    <p className="card-text"> {v.text}</p>
                    <span>{v.price}</span>
                    <button className="btn button">Выбрать</button>
                    </div>
                </div>
                    )
                })}
            </div>
            <h2 id= "snacks">Закуски</h2>
            <div  className="snacks">
            
            {snacks.map((v,i)=> {
                    return (
                        <div key={i} className='card'>
                    {v.img}
                    <div className="card-body">
                    <h2 className="h2 card-title">{v.title}</h2>
                    <p className="card-text">{v.text}</p>
                    <span>{v.price}</span>
                    <button className="btn button">Выбрать</button>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    )
}
