import '../styles/cart.scss'
import React from 'react';
import { Link } from 'react-router-dom';


const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  if (cartItems.length === 0) {
    return <div className='empty-message' >Your cart is empty</div>;
  }

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const getTotal = (cartItems) => {
    const totalPrice = cartItems.reduce((accumulator, currentObject) => {
      // Check if the current object has a height property
      if (currentObject && typeof currentObject.price === 'number') {
        return accumulator + currentObject.price;
      }
  
      return accumulator;
    }, 0);
  
    return totalPrice;
  };

  const handleCheckout = () => {
    clearCart();
  };

  return (
    <div>
    <h2 className='your-cart' >Your Cart</h2>
    <ul>
        {cartItems.map((item, index) => (
        <li className='cart-item' key={index}>
            <Link to={`/${item.slug}`} className="clothing-item-link">
            <div className="cart-item-content">
                <img className='cart-item-image' src={item.photos[0]} alt={item.name}/>
                <div className='cart-item-info'>
                <h2 className='cart-item-name'>{item.name}</h2>
                <h2 className='cart-item-price'>${item.price}</h2>
                <h2 className='cart-item-size'>Size: {item.size}</h2>
                </div>
            </div>
            </Link>
            <button onClick={() => handleRemoveFromCart(item)}>
            Remove from Cart
            </button>
        </li>
        ))}
    </ul>
    <h2 className='total'>Total: ${getTotal(cartItems)}</h2>
    <Link to="/checkout" className="checkout-link">
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
    </Link>
    </div>

  );
};

export default Cart;
