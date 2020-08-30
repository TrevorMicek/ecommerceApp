import React from 'react';
import ProductItem from '../products/ProductItem';
import GloveImg from '../../../Images/gloves.jpg';
import product from '../../../Styles/storeStyles/categoryStyles/productPage.module.css';

const Gloves = (props) => (
    <section className={product.layout}>
        <ProductItem name={props.gloves.one.name} price={`$${props.gloves.one.price}`} url={GloveImg} fire={null} />
                      <ProductItem name={props.gloves.two.name} price={`$${props.gloves.two.price}`} url={GloveImg} fire={null} />
                      <ProductItem name={props.gloves.three.name} price={`$${props.gloves.three.price}`} url={GloveImg} fire={null} />
                      <ProductItem name={props.gloves.four.name} price={`$${props.gloves.four.price}`} url={GloveImg} fire={null} />
                      <ProductItem name={props.gloves.five.name} price={`$${props.gloves.five.price}`} url={GloveImg} fire={null} />
                      <ProductItem name={props.gloves.six.name} price={`$${props.gloves.six.price}`} url={GloveImg} fire={null} />
    </section>
);
export default Gloves;