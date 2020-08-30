//mini app within my portfolio that does not link back, is encapsulated and only shows and has code related to my eCommerce package.
//navbar to only have a cart icon
//cart component should have obvious big, back button in main section


import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Styles/storeStyles/store.module.css'
import Store from './App';
import './Styles/global.module.css';

export const App = () => (
    
      <div className={styles.wrapper}>
        <Store />
      </div>
)
ReactDOM.render(
    <App />, document.getElementById('root')
);
/*
started ~8/01/20

*/