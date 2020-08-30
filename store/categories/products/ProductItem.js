import React from 'react';
import product from '../../../Styles/storeStyles/categoryStyles/productItem.module.css';
import style from '../../../Styles/storeStyles/categoryStyles/productTitle.module.css';
import img from '../../../Styles/storeStyles/categoryStyles/productImg.module.css';
import price from '../../../Styles/storeStyles/categoryStyles/productPrice.module.css';
import layout from '../../../Styles/toolBarStyles/cart.module.css'

const ProductItem = (props) => (
    <div className={product.layout}>
        <div className={style.title}><button>{props.name}</button></div>
        <div className={price.style}><h4>{props.price}</h4></div>
        <div className={img.overlay}>
            <button onClick={props.fire} />
        </div>
        <button className={layout.pushBtn} onClick={props.addToCart}>
            <img src={require('../../../Images/carty.png')} className={layout.pushImage} alt="" />
        </button>
        <img src={props.url} className={img.image} alt="" />
    </div>
);

export default ProductItem;