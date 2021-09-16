import React from "react"
import styles from "./DeliveryTime.module.css"

const DeliveryTime = () => {
    return (
        <div  className={styles.delivery}>
            <span>Доставка пиццы Бишкек</span>
            <ul>
               <li>37 мин </li> 
               <li>Ranking</li>
                </ul>
            

        </div>
    );
}

export default DeliveryTime;