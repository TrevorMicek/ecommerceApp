import React from 'react';
import styles from '../../Styles/toolBarStyles/cart.module.css';
import layout from '../../Styles/toolBarStyles/cart.module.css';

const CartButton = (props) => (
       <button className={layout.btn} onClick={props.setCart}>
            <img src={require('../../Images/cartButton.png')} className={layout.image} alt="" />
        </button>
);
export default CartButton;