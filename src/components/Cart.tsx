import { HiX } from "react-icons/hi";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartStyles from "../styles/CartStyles";
import { formatPrice } from "../utils/formatPrice";
import { CartItem } from "./CartItem";
import { IoCloseSharp } from "react-icons/io5";

type CartProps = {
  cartOpen: boolean
}

export function Cart({ cartOpen }: CartProps) {
  const { closeCart, cartItems, cartQty, totalPrice } = useShoppingCart();

  return (
    <>
      {cartOpen && <CartStyles>
        <div className="wrapper">
          <div className="bold banner">
            <div>Your Shopping Cart</div>
            <button type="button" onClick={closeCart}>
              <IoCloseSharp></IoCloseSharp>
            </button>
          </div>

          <div className="cart-items padding-top">
            {cartItems.map(item => (
              <>
                <CartItem key={item.id} {...item}></CartItem>
                <hr className="solid"></hr>
              </>
            ))}
          </div>
          <div className="total bold">
            <div>Subtotal: ({cartQty} {(cartQty > 1) ? 'items' : 'item'})</div>
            <div>${formatPrice(totalPrice)}</div>
          </div>
          <button type="button" className="checkout bold">CHECKOUT</button>
        </div>
      </CartStyles>}
    </>
  )
}