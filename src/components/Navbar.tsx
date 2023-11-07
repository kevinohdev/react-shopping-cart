import { useShoppingCart } from '../context/ShoppingCartContext'
import NavbarStyles from '../styles/NavbarStyles'
import logo from '../assets/logo.png'
import { IoBag } from "react-icons/io5";

function Navbar() {
  const { openCart, cartQty } = useShoppingCart();

  return (
    <NavbarStyles>
      <div className='nav'>
        <img src={logo} alt='Watch Mode Logo'></img>
        {cartQty > 0 && <div className='qty'>{cartQty}</div>}
        <button type='button' onClick={openCart}>
          <IoBag></IoBag>
        </button>
      </div>
    </NavbarStyles >
  )
}

export default Navbar