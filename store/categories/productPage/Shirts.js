import React from 'react';


import ShirtImg from '../../../Images/shirts.jpg';
import ProductItem from '../products/ProductItem';
import product from '../../../Styles/storeStyles/categoryStyles/productPage.module.css';

const Shirts = (props) => (
    <section className={product.layout}>
    <ProductItem name={props.shirts.one.name} price={`$${props.shirts.one.price}`} url={ShirtImg} fire={null} />
    <ProductItem name={props.shirts.two.name} price={`$${props.shirts.two.price}`} url={ShirtImg} fire={null} />
    <ProductItem name={props.shirts.three.name} price={`$${props.shirts.three.price}`} url={ShirtImg} fire={null} />
    <ProductItem name={props.shirts.four.name} price={`$${props.shirts.four.price}`} url={ShirtImg} fire={null} />
    <ProductItem name={props.shirts.five.name} price={`$${props.shirts.five.price}`} url={ShirtImg} fire={null} />
    <ProductItem name={props.shirts.six.name} price={`$${props.shirts.six.price}`} url={ShirtImg} fire={null} />
    </section>
);
export default Shirts;