import Catigories from './components/Categories/Categories'
import Header from './components/Header/Header'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import SortPizza from './components/SortPizza/SortPizza'
import './scss/App.scss'

import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Cart from './pages/Cart/Cart'
import { cartItem } from './types/types'
import axios from 'axios'
import { createContext, useState } from 'react'

export const SearchContext = createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')

  const addToCart = (obj: cartItem) => {
    axios.post('https://637be23f72f3ce38ea970f85.mockapi.io/cart', obj)
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              {/* <Route path="/cart" element={<EmptyCart />} /> */}
              <Route path="/" element={<Home addToCart={addToCart} />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App
