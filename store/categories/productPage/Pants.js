import React from 'react';


import PantImg from '../../../Images/pants.jpg';
import ProductItem from '../products/ProductItem';
import product from '../../../Styles/storeStyles/categoryStyles/productPage.module.css';

const Pants = (props) => (
  <section className={product.layout}>
    <ProductItem name={props.pants.one.name} price={`$${props.pants.one.price}`} url={PantImg} fire={null} />
    <ProductItem name={props.pants.two.name} price={`$${props.pants.two.price}`} url={PantImg} fire={null} />
    <ProductItem name={props.pants.three.name} price={`$${props.pants.three.price}`} url={PantImg} fire={null} />
    <ProductItem name={props.pants.four.name} price={`$${props.pants.four.price}`} url={PantImg} fire={null} />
    <ProductItem name={props.pants.five.name} price={`$${props.pants.five.price}`} url={PantImg} fire={null} />
    <ProductItem name={props.pants.six.name} price={`$${props.pants.six.price}`} url={PantImg} fire={null} />
  </section>
);
export default Pants;