import './App.css'
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Item from './components/Item';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clothes from './clothes'

const App = () => {
  
    // State to manage cart items
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (item) => {
      const isDuplicate = cartItems.some((cartItem) => cartItem.id === item.id);
    
      if (!isDuplicate) {
        setCartItems([...cartItems, item]);
        setCartCount(cartCount + 1);
        toast.info(`Successfully added ${item.name} to cart`);
      } else {
        toast.info('Item already in the cart');
      }
    };

    const removeFromCart = (itemToRemove) => {
      const updatedCart = cartItems.filter((item) => item !== itemToRemove);
      setCartItems(updatedCart);
      setCartCount(cartCount - 1);
      toast.info(`Removed ${itemToRemove.name} from cart`);
    };

    const clearCart = () => {
      setCartItems([]);
      setCartCount(0)
    };

  return (
    <div className='body'>
      <Router>
        <div>
          <Header cartCount={cartCount}/>

          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<Home clothes={clothes}/>} />
            <Route path="/:slug" element={<Item clothes={clothes} addToCart={addToCart}/>} /> 
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar />
        </div>
      </Router>
    </div>
  );
};

export default App;

