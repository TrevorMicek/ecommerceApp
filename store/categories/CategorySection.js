import React from 'react';

import section from '../..//Styles/storeStyles/categoryStyles/categorySection.module.css';

import CategoryItem from './CategoryItem';

import ShoeImg from '../../Images/shoes.jpg';
import ShirtImg from '../../Images/shirts.jpg';

import PantImg from '../../Images/pants.jpg';
import HatImg from '../../Images/hats.jpg';
import GloveImg from '../../Images/gloves.jpg';
import JewelryImg from '../../Images/accessory.jpg';

const CategorySection = ( {setPage} ) => (

 // <BackButton fire={()=> setCategoryPage(true)} />
<section className={section.layout}>
    <CategoryItem  name="Shoes" url={ShoeImg} category='shoes' setPage={()=> setPage('shoes')} />
    <CategoryItem  name="Shirts" url={ShirtImg} category='shirts' setPage={()=> setPage('shirts')} />
    <CategoryItem  name="Pants" url={PantImg} category='pants' setPage={()=> setPage('pants')} />
    <CategoryItem  name="Hats" url={HatImg} category='hats' setPage={()=> setPage('hats')} />
    <CategoryItem  name="Jewelry" url={JewelryImg} category='jewelry' setPage={()=> setPage('jewelry')} />
    <CategoryItem  name="Gloves" url={GloveImg} category='gloves' setPage={()=> setPage('gloves')} />
</section>
)
export default CategorySection