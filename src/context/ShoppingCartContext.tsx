import { createContext, ReactNode, useContext, useState } from "react"
import { Cart } from "../components/Cart"
import storeItems from '../data/storeItems.json'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  removeItem: (id: number) => void
  cartItems: CartItem[]
  cartQty: number
  totalPrice: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  const increaseQty = (id: number) => {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseQty = (id: number) => {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeItem(id: number) {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }

  const cartQty = cartItems.reduce(
    (qty, item) => item.quantity + qty,
    0
  )

  const totalPrice = cartItems.reduce(
    (total, cartItem) => {
      const item = storeItems.find(item => item.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity
    }, 0
  )


  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        increaseQty,
        decreaseQty,
        cartItems,
        cartQty,
        totalPrice,
        removeItem
      }}
    >
      {children}
      <Cart cartOpen={cartOpen}></Cart>
    </ShoppingCartContext.Provider>
  )
}