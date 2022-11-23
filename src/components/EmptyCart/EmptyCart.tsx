import { FC } from 'react'
import style from './EmptyCart.module.scss'

import cartForEmpty from '../../assets/img/shopping-car.png'

interface IEmptyCartProps {}

const EmptyCart: FC<IEmptyCartProps> = (props) => {
  return (
    <div className={style.emptyCard}>
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы
        заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartForEmpty} width="300" alt="empty card" />
      <button className={style.btnBack}>Вернуться назад</button>
    </div>
  )
}

export default EmptyCart
