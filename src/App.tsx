import Catigories from './components/Categories/Categories'
import Header from './components/Header/Header'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import SortPizza from './components/SortPizza/SortPizza'
import './scss/App.scss'

// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { Home } from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import EmptyCart from './components/EmptyCart/EmptyCart'
import NotFound from './pages/NotFound/NotFound'
import Cart from './pages/Cart/Cart'
import { useState } from 'react'
import { cartItem } from './types/types'
import axios from 'axios'

function App() {
  const [itemCart, setItemCart] = useState<cartItem>()

  const addToCart = (obj: cartItem) => {
    setItemCart(obj)
    axios.post('https://637be23f72f3ce38ea970f85.mockapi.io/cart', itemCart)
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            {/* <Route path="/cart" element={<EmptyCart />} /> */}
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart itemCart={itemCart} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
