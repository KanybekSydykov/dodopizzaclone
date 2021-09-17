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
            <h2 id= "pizzas" className="h2">Пицца</h2>
            <div  className="pizzas"  >
                
                {pizza.map((v,i)=> {
                    return (
                        // onClick={()=> setModalActive(true)} key={i}
                        <div  className='card'  >
                            
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
            <div  className="row combos containers">
            
            {combo.map((v,i)=> {
                    return (
                        <div key={i} className='col-lg-3 col-md-4 col-sm-6 combo box'>
                    {v.img}
                    <div>
                    <h2>{v.title}</h2>
                    <p>{v.text}</p>
                    <span>{v.price}</span>
                    <button className="btn btn-outline-success">Выбрать</button>
                    </div>
                </div>
                    )
                })}
            </div>
            <h2 id= "snacks">Закуски</h2>
            <div  className="row snacks containers">
            
            {snacks.map((v,i)=> {
                    return (
                        <div key={i} className='col-lg-3 col-md-4 col-sm-6 snack box'>
                    {v.img}
                    <div>
                    <h2>{v.title}</h2>
                    <p>{v.text}</p>
                    <span>{v.price}</span>
                    <button className="btn btn-outline-danger">Выбрать</button>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    )
}
