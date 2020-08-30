import React, {useState, useEffect} from 'react';

import styles from './Styles/storeStyles/store.module.css';


import ToolBar from './store/toolbar/ToolBar'
import BackButton from './store/toolbar/BackButton';
import CartButton from './store/toolbar/CartButton';
import CategorySection from './store/categories/CategorySection';

import ShoePage from './store/categories/productPage/Shoes';
import ShirtsPage from './store/categories/productPage/Shirts';
import PantsPage from './store/categories/productPage/Pants';
import HatsPage from './store/categories/productPage/Hats';
import JewelryPage from './store/categories/productPage/Jewelry';
import GlovesPage from './store/categories/productPage/Gloves';


import UseFetch from './store/fetchData';
import CartPage from './store/cart/Cart';

function Store() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [categoryPage, setCategoryPage] = useState(true);
  const [productPage, setProductPage] = useState([]);
  const [cartPage, setCartPage] = useState(false);
 
  const getData = (page)=> UseFetch(page)
  .then(res => res.json())
  .then(
    (data) => {
      setIsLoaded(true);
      setItems(data);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
  );
  useEffect(() => {
      setIsLoaded(true);
  }, [])
  const setCart = () => {
    setCartPage(true)
    if (categoryPage === true) {
      setCategoryPage(false)
    } else if (productPage !== null) {
      setProductPage(null)
    }
   
  }
  const setPage = (category) => {
    getData(category)
    setCategoryPage(false);
    setProductPage(category);
  }; 
  const goBack = (x) => {
    setCategoryPage(true)
    setProductPage(null)
  }
  
  const addToCart = () => {
    const product = [];
    product.map(item => (
      <ProductItem key={item.id}/>
    ))
  }

const switchPage = () => {
  switch(true) {
    case error:
      return <div>Error: {error.message}</div>;
    case !isLoaded:
        return <div>Loading...</div>;
    case productPage === 'shoes':
      return (
          items.map(item => (
            <ShoePage key={item.shoes}{...item} />
          ))
      )
    case productPage === 'shirts':
      return (
          items.map(item => (
            <ShirtsPage key={item.shirts} {...item} />
          ))
      )
    case productPage === 'pants':
      return (
        items.map(item => (
          <PantsPage key={item.pants} {...item} />
        ))
      )
    case productPage === 'hats':
      return (
        items.map(item => (
          <HatsPage key={item.hats} {...item} />
        ))
      )
    case productPage === 'jewelry':
      return (
        items.map(item => (
          <JewelryPage key={item.jewelry} {...item} />
        ))
      )
    case productPage === 'gloves':
      return (
        items.map(item => (
          <GlovesPage key={item.gloves} {...item} />
        ))
      )
    case cartPage:
      return <CartPage />
    default: 
      return <CategorySection setPage={setPage} />
  }
}
    return (
      <div className={styles.layout}>
        <CartButton setCart={()=>setCart()} />
        <ToolBar />
        {switchPage()}
    </div>
    )
}
export default Store;