import '../styles/cart.scss'
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div>
    <h2>Your Cart</h2>
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
    </div>

  );
};

export default Cart;
