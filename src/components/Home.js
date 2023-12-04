import '../styles/home.scss'
import homeImage from '../assets/images/home-image.jpeg'
import { Link } from 'react-router-dom';

const Home = ({clothes}) => {

    return (
        <>
        <div className='home-image-container'>
            <img className='home-image' src={homeImage} alt='shirts'/>
        </div>
        <div className='clothing-grid'>
            {clothes.map(item => (
            <Link key={item.id} to={`/${item.slug}`} className="clothing-item-link">
                <div className="clothing-item">
                    <img className='item-image' src={item.photos[0]} alt={item.name} />
                    <h2 className='item-name'>{item.name}</h2>
                    <p className='item-price'>{`$${item.price.toFixed(2)}`}</p>
                </div>
            </Link>
            ))}
      </div>
        </>
    )
}

export default Home;