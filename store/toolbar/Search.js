import React from 'react';
import styles from '../../Styles/toolBarStyles/search.module.css';

const Search = () => (
    <input type="search" className={styles.search} placeholder="Search for..." />
);
export default Search;