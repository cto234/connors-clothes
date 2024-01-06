import '../styles/home.scss'
import React, { useState } from 'react';
import thriftStore from '../assets/images/thrift-store.jpeg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Home = ({clothes}) => {

    const [sortOption, setSortOption] = useState('name');
    const [filterSize, setFilterSize] = useState('all');
  
    const handleSortChange = (option) => {
      setSortOption(option);
    };
  
    const handleSizeFilterChange = (size) => {
      setFilterSize(size);
    };
  
    const sortedAndFilteredClothes = [...clothes]
      .filter((item) => filterSize === 'all' || item.size === filterSize)
      .sort((a, b) => {
        switch (sortOption) {
          case 'priceLowToHigh':
            return a.price - b.price;
          case 'priceHighToLow':
            return b.price - a.price;
          default:
            // Sort by name if no valid option is selected
            return a.name.localeCompare(b.name);
        }
      });


    return (
        <>
        {/* Home page banner */}
        <div className='home-image-container'>
          <div className='overlay-text'>
              <h2 className='about-us'>About Us</h2>
              <p className='about'>Welcome! Here at Connor's Clothes, we are dedicated to providing a wide selection of used clothes that not only enhance your wardrobe but also contribute to a greener planet.</p>
              <p className='about'> Join us on this journey towards a more sustainable future, where looking good and doing good go hand in hand.</p>
          </div>
          <img className='home-image' src={thriftStore} alt='shirts' />
        </div>

        {/*sorting buttons */}
        <div className='sorter-container'>
            <div className='sorter-option'>
                <label htmlFor="sortOption">Sort by:</label>
                    <select
                    id="sortOption"
                    onChange={(e) => handleSortChange(e.target.value)}
                    value={sortOption}
                    >
                        <option value="recentlyAdded">Recently Added</option>
                        <option value="priceLowToHigh">Price Low to High</option>
                        <option value="priceHighToLow">Price High to Low</option>
                    </select>
                    <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className='sorter-option'>
                <label htmlFor="filterSize">Filter by Size:</label>
                    <select
                    id="filterSize"
                    onChange={(e) => handleSizeFilterChange(e.target.value)}
                    value={filterSize}
                    >
                        <option value="all">All Sizes</option>
                        <option value="S">S</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="7">7</option>
                        <option value="30">30</option>
                        <option value="34">34</option>
                    </select>
                    <FontAwesomeIcon className='filter-chevron' icon={faChevronDown} />
            </div>
        </div>
        {/*display clothes*/}
        <div className='clothing-grid'>
            {sortedAndFilteredClothes.map((item) => (
                <div className='clothing-item'>
                    <Link key={item.id} to={`/${item.slug}`} className='clothing-item-link'>
                    <img className='item-image' src={item.photos[0]} alt={item.name} />
                    <h2 className='item-name'>{item.name}</h2>
                    <p className='item-price'>{`$${item.price.toFixed(2)}`}</p>
                    </Link>
                </div>
            ))}
        </div>
        </>
    )
}

export default Home;