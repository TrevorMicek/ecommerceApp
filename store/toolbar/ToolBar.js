//sort/filter/search store component
import React from 'react';
import styles from '../../Styles/toolBarStyles/toolBar.module.css';
import Search from './Search';
const Tools = () => (
    /*

    init imported components. searchBar, sort(category), filter(price,etc)
    */
   <>
    <div className={styles.layout}>
    this is toolbar loren ipsum loren ipsum loren ipsum
    </div>
    <Search />
    </>
);
export default Tools;