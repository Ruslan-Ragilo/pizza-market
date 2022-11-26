import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../../assets/img/cart.svg'
import cartTrashIcon from '../../assets/img/trash-cart.svg'
import { cartItem } from '../../types/types'

import style from './Cart.module.scss'
import CartItem from './CartItem/CartItem'

const Cart: React.FunctionComponent = (props) => {
  const [itemCart, setItemCart] = useState<cartItem[]>([])

  useEffect(() => {
    axios
      .get('https://637be23f72f3ce38ea970f85.mockapi.io/cart')
      .then((res) => {
        setItemCart(res.data)
      })
  }, [])

  const deleteItemsCart = () => {
    axios.delete('https://637be23f72f3ce38ea970f85.mockapi.io/cart')
    console.log('ll')
  }

  return (
    <div className={style.cart}>
      <div className={style.cartTitle}>
        <div>
          <img src={cartIcon} alt="cart" />
          <h2>Корзина</h2>
        </div>
        <div onClick={() => deleteItemsCart()}>
          <img src={cartTrashIcon} alt="cart" />
          <p>Очистить корзину</p>
        </div>
      </div>
      <div className={style.wrapperOrder}>
        {itemCart.map((el, i, arr) => (
          <CartItem
            key={el.id}
            title={el.title}
            imageUrl={el.imageUrl}
            id={el.id}
            types={el.types}
            sizes={el.sizes}
            total={el.total}
            price={el.price}
          />
        ))}
      </div>
      <div className={style.wrepperTotalOrder}>
        <p>
          Всего пицц: <b>{itemCart.length || 0} шт.</b>
        </p>
        <p>
          Сумма заказа: <b>3423</b>
        </p>
      </div>
      <div className="navFromCart">
        <Link to="/">Back</Link>
      </div>
    </div>
  )
}

export default Cart
