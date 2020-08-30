import React from 'react';
import styles from '../../Styles/storeStyles/categoryStyles/categoryItem.module.css';
import style from '../../Styles/storeStyles/categoryStyles/categoryTitle.module.css';
import img from '../../Styles/storeStyles/categoryStyles/categoryImage.module.css';

const CategoryItem = (props) => (
    
    <div className={styles.layout}>
 
        <div className={style.title}><button>{props.name}</button></div>

        <div className={img.overlay}>
            <button onClick={props.setPage} />
        </div>
  
        <img src={props.url} className={img.image} alt="" />
  
    </div>
 /*onClick={setToggled(isToggled === Page[0])}*/
);
export default CategoryItem;