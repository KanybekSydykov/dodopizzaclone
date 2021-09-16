import React,{useState} from "react";
import Modal from "./Modal";
import "./modal.container.css";

const ModalView = () => {
    const [modalActive,setModalActive] = useState (false);
    return (
      <div >
        
          <button className='open-btn' onClick={()=> setModalActive(true)}>Login</button>
        
         <Modal active={modalActive} setActive={setModalActive} >
           <form action="">
             <h2>Вход на сайт</h2>
             <p>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
             <p>Номер телефона <br/>
             <input className="tel" type="tel" value="+996 " /></p>
             <input className="btn" type="submit" value="Выслать код"/>
           </form>
         </Modal>
         </div>
    )
}
export default ModalView;