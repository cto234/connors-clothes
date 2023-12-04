import '../styles/header.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/logo.png'


const Header = () => {
    return(
        <header>
        <div className="logo-container">
            <Link to='/'>
            <img src={logo} alt="logo" />
            </Link>
        </div>

        <div className="cart-container">
            <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} className='cart'/> 
            </Link>
        </div>
        </header>
  );
};

export default Header;
