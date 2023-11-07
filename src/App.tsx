import { Cart } from "./components/Cart"
import Navbar from "./components/Navbar"
import { Store } from "./components/Store"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { ToastContainer } from 'react-toast'

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar></Navbar>
      <Store></Store>
      <ToastContainer delay={3000} position={'top-center'} />
    </ShoppingCartProvider>
  )
}

export default App
