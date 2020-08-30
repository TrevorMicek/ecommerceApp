//the actual store component, that gets init by 'Store' component



import React from 'react';
import ToolBar from './toolbar/ToolBar';


import styles from '../Styles/storeStyles/store.module.css';


import State from '../App';
import Search from './toolbar/Search';
import CartButton from './toolbar/CartButton';

const Store = (props, {setCart, productPage}) => (
   
    <div className={styles.layout}>
        <CartButton setCart={()=>setCart()}/>
        <Search />
        <ToolBar />
        <State />
    </div>
    
    
);
export default Store;

