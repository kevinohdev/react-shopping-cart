import { useShoppingCart } from "../context/ShoppingCartContext"
import ItemStyles from "../styles/ItemStyles"
import { formatPrice } from "../utils/formatPrice"
import { IoBagAdd, IoAddCircle } from "react-icons/io5";
import { toast } from "react-toast";

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}
export function Item({ id, name, price, imgUrl }: StoreItemProps) {
  const { increaseQty } = useShoppingCart();

  const handleClick = (id: number) => {
    increaseQty(id);
    toast.success('Item Added Successfully');
  }

  return (
    <ItemStyles>
      <div className="card">
        <div className="stacked">
          <img src={imgUrl} alt={name}></img>
          <div className="lightbox" onClick={() => handleClick(id)}>
            <IoBagAdd></IoBagAdd>
          </div>
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <div className="flex">
            <p>${formatPrice(price)}</p>
            <button className="mobile-add" onClick={() => handleClick(id)}>
              <IoAddCircle></IoAddCircle>
            </button>
          </div>
        </div>
      </div >
    </ItemStyles >
  )
}