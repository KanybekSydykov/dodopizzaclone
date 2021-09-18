import React,{useState} from "react";
import Modal from "./Modal";
import "./modalview.css";


const ModalView = () => {
    const [modalActive,setModalActive] = useState (false);
    return (
      <div >
        
          <button className='open-btn btn btn-primary' onClick={()=> setModalActive(true)}>Login</button>
        
         <Modal active={modalActive} setActive={setModalActive} >
           <div className="modalview">
           <form action="">
             <h2>Вход на сайт</h2>
             <p>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
             <p>Номер телефона <br/>
             <input className="tel" type="tel" value="+996 " /></p>
             <button  className="btn btn-danger">Выслать код</button>
           </form>
           </div>
         </Modal>
         </div>
    )
}
export default ModalView;