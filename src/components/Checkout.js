import '../styles/checkout.scss'
import headerLogo from '../assets/images/header-logo.png'
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <>
          <div className="image-container">
            <Link to="/">
                <img className='logo' src={headerLogo} alt='logo' />
            </Link>
          </div>
          <p className='thanks-message'>Thank you for using Connor's Clothes. This site is not a real ecommerce platform (although many of these clothes really are for sale on my Depop page), it is simply a personal project of mine to work on developing my skills with React.js. I hope you enjoyed the functionality and look of the site. It's not perfect but I learned a lot about managing state, passing props, and UI design, and I'm very happy with how it turned out. Now on to the next project!</p>
        </>
      );
      
}

export default Checkout;