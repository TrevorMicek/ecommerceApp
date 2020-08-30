//button going back to main store
import React from 'react';
import styles from '../../Styles/cartStyles/cartPage.module.css';
import Summary from './Summary';
const itemSlot = []
const CartPage = () => (
    <section className={styles.layout}>
    <Summary />

    <section className={styles.total}>

    </section>
    </section>
)
export default CartPage;