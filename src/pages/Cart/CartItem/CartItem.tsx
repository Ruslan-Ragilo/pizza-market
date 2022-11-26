import { FC } from 'react'
import ButtonSecondary from '../../../components/ButtonSecondary/ButtonSecondary'
import { cartItem } from '../../../types/types'

import style from './CartItem.module.scss'

const CartItem: FC<cartItem> = (props) => {
  return (
    <div className={style.cartItem}>
      <div className={style.titlePizza}>
        <img width="80" src={props.imageUrl} alt="pizza" />
        <div>
          <h2>{props.title}</h2>
          <p>
            {props.types}, {props.sizes} см.
          </p>
        </div>
      </div>
      <div className={style.totalOrder}>
        <ButtonSecondary content="&mdash;" />
        <p>{props.total}</p>
        <ButtonSecondary content="&#43;" />
      </div>
      <div className={style.totalOrder}>
        <p className={style.totalPrice}>{props.price} &#8381;</p>
      </div>
      <ButtonSecondary colorBorder={['gray']} content="x" />
    </div>
  )
}

export default CartItem
