import '../styles/item.scss'
import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel'; 

const Item = ({ clothes, addToCart }) => {
  const { slug } = useParams();
  const item = clothes.find((b) => b.slug === slug);

  if (!item) {
    return <div className='empty-message'>Item not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <>
      <div className='wrapper'>
        <Carousel photos={item.photos} />
        <div className='info-container'>
          <h1 className='item-name'>{item.name}</h1>
          <p className='description'>{item.description}</p>
          <h2 className='size'>Size: {item.size}</h2>
          <h2 className='price'>${item.price}.00</h2>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Item;
