import React from 'react';

import styles from '../../Styles/cartStyles/Summary.module.css';


const product = [];
const Summary = () => (
    <section className={styles.layout}>
        <div className={styles.title}>Cart Summary</div>
        <div className={styles.itemWrapper}>
            <div className={styles.product}>
                Product
            </div>
            <div className={styles.price}>
                Price
            </div>
            <div className={styles.quantity}>
                Qty
            </div>
           
        </div>
        <div className={styles.productItems}>
            {product}
        </div>

    </section>
)
export default Summary;