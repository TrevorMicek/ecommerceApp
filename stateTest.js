import React from 'react';
import layout from '../../../Styles/storeStyles/categoryStyles/categorySection.module.css';
import { useState } from 'react';

import CategoryItem from './CategoryItem';
import Search from '../toolbar/Search';

import ShoeImg from '../../../Images/shoes.jpg';
import ShirtImg from '../../../Images/shirts.jpg';
import PantImg from '../../../Images/pants.jpg';
import HatImg from '../../../Images/hats.jpg';
import GloveImg from '../../../Images/gloves.jpg';
import JewelryImg from '../../../Images/accessory.jpg';

import Shoes from '../../../store/shop/categories/productPage/Shoes';
import Shirts from '../../../store/shop/categories/productPage/Shirts';
import Pants from '../../../store/shop/categories/productPage/Pants';
import Hats from '../../../store/shop/categories/productPage/Hats';
import Jewelry from '../../../store/shop/categories/productPage/Jewelry';
import Gloves from '../../../store/shop/categories/productPage/Gloves';


//will house state to switch between category page and product pages

const State = () => {
   const Categories = () => (
    <>
    <CategoryItem name="Shoes" url={ShoeImg} fire={()=>handleClick(Page[0])} />
    <CategoryItem name="Shirts" url={ShirtImg} fire={()=>handleClick(Page[1])} />
    <CategoryItem name="Pants" url={PantImg} fire={()=>handleClick(Page.pants)} />
    <CategoryItem name="Hats" url={HatImg} fire={()=>handleClick(Page.hats)} />
    <CategoryItem name="Jewelry" url={JewelryImg} fire={()=>handleClick(Page.jewelry)} />
    <CategoryItem name="Gloves" url={GloveImg} fire={()=>handleClick(Page.gloves)} />
    </>
   )
    const Page = [
        <Shoes />,
        <Shirts />,
       <Pants />,
        <Hats />,
        <Jewelry />,
        <Gloves />,
        <Categories />
    ];
    const [activePage, setActivePage] = useState([]);
    
    var handleClick = (x) => setActivePage(activePage === x);
    var renderSwitch = () => {
        
        switch(activePage) {
            case activePage === Page[0]:
                return Page[0];
            case activePage === Page[1]:
                return Page[1];
            case Page.pants:
                return Page.pants;
            case  Page.hats:
                return Page.hats;
            case Page.jewelry:
                return Page.jewelry;
            case  Page.gloves:
                return Page.gloves;
            default: 
                return Page[6]
        }};
    return(
        <>
            <Search />
            <div className={layout.layout}>
                {renderSwitch()}
            </div>
            {console.log(activePage)}
        </>
        );
}
export default State;