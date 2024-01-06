import './App.css'
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Item from './components/Item';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import clothes from './clothes'

const App = () => {
  
    // State to manage cart items
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
      // Check if the item is already in the cart
      const isDuplicate = cartItems.some((cartItem) => cartItem.id === item.id);
    
      if (!isDuplicate) {
        setCartItems([...cartItems, item]);
        //Change to popup alert
        console.log(`Successfully added ${item.name} to cart`)
      } else {
        //Change to popup alert
        console.log('Item already in the cart');
      }
    };

    const removeFromCart = (itemToRemove) => {
      const updatedCart = cartItems.filter((item) => item !== itemToRemove);
      setCartItems(updatedCart);
      //Change to popup alert
      console.log(`Removed ${itemToRemove.name} from cart`)
    };

  return (
    <div className='body'>
      <Router>
        <div>
          <Header />

          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<Home clothes={clothes}/>} />
            <Route path="/:slug" element={<Item clothes={clothes} addToCart={addToCart}/>} /> 
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

