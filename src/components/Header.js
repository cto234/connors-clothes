import '../styles/header.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import headerLogo from '../assets/images/header-logo.png'


const Header = ({ cartCount }) => {
    return (
      <header>
        <div className="logo-container">
          <Link to='/'>
            <img className='header-logo' src={headerLogo} alt='Logo' />
          </Link>
        </div>
  
        <div className="cart-container">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} className='cart' />
            {/* Display cart count next to the cart icon */}
            {cartCount > 0 && (
              <div className="cart-count">
                {cartCount}
              </div>
            )}
          </Link>
        </div>
      </header>
    );
  };
  

export default Header;
