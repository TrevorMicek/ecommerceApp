import React from 'react';
import ProductItem from '../products/ProductItem';
import JewelryImg from '../../../Images/accessory.jpg';
import product from '../../../Styles/storeStyles/categoryStyles/productPage.module.css';

const Jewelry = (props) => (
    <section className={product.layout}>
    <ProductItem name={props.jewelry.one.name} price={`$${props.jewelry.one.price}`} url={JewelryImg} fire={null} />
    <ProductItem name={props.jewelry.two.name} price={`$${props.jewelry.two.price}`} url={JewelryImg} fire={null} />
    <ProductItem name={props.jewelry.three.name} price={`$${props.jewelry.three.price}`} url={JewelryImg} fire={null} />
    <ProductItem name={props.jewelry.four.name} price={`$${props.jewelry.four.price}`} url={JewelryImg} fire={null} />
    <ProductItem name={props.jewelry.five.name} price={`$${props.jewelry.five.price}`} url={JewelryImg} fire={null} />
    <ProductItem name={props.jewelry.six.name} price={`$${props.jewelry.six.price}`} url={JewelryImg} fire={null} />
    </section>
);
export default Jewelry;