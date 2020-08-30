import React from 'react';
import ProductItem from '../products/ProductItem';
import HatImg from '../../../Images/hats.jpg';
import product from '../../../Styles/storeStyles/categoryStyles/productPage.module.css';

const Hats = (props) => (
    <section className={product.layout}>
    <ProductItem name={props.hats.one.name} price={`$${props.hats.one.price}`} url={HatImg} fire={null} />
    <ProductItem name={props.hats.two.name} price={`$${props.hats.two.price}`} url={HatImg} fire={null} />
    <ProductItem name={props.hats.three.name} price={`$${props.hats.three.price}`} url={HatImg} fire={null} />
    <ProductItem name={props.hats.four.name} price={`$${props.hats.four.price}`} url={HatImg} fire={null} />
    <ProductItem name={props.hats.five.name} price={`$${props.hats.five.price}`} url={HatImg} fire={null} />
    <ProductItem name={props.hats.six.name} price={`$${props.hats.six.price}`} url={HatImg} fire={null} />
    </section>
);
export default Hats;