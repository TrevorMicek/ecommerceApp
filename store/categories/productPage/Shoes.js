import React, {useState, useEffect} from 'react';

import ProductItem from '../products/ProductItem';
import ShoeImg from '../../../Images/shoes.jpg';
import product from '../../../Styles/storeStyles/categoryStyles/productPage.module.css';


const ShoePage = (props) => (
  <section className={product.layout}>


        <ProductItem name={props.shoes.one.name} price={`$${props.shoes.one.price}`} url={ShoeImg} cart={null} />
        <ProductItem name={props.shoes.two.name} price={`$${props.shoes.two.price}`} url={ShoeImg} cart={null} />
        <ProductItem name={props.shoes.three.name} price={`$${props.shoes.three.price}`} url={ShoeImg} cart={null} />
        <ProductItem name={props.shoes.four.name} price={`$${props.shoes.four.price}`} url={ShoeImg} cart={null} />
        <ProductItem name={props.shoes.five.name} price={`$${props.shoes.five.price}`} url={ShoeImg} cart={null} />
        <ProductItem name={props.shoes.six.name} price={`$${props.shoes.six.price}`} url={ShoeImg} cart={null} />
       
        </section>

)
export default ShoePage;
