import axios from 'axios'
import * as React from 'react'
import Catigories from '../../components/Categories/Categories'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import SceletonPizzaCard from '../../components/Sceleton/SceletonPizzaCard'
import SortPizza from '../../components/SortPizza/SortPizza'

export interface IHomeProps {
  addToCart: Function
}

type PizzaList = {
  id: number
  imageUrl: string
  title: string
  types: string[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

export function Home(props: IHomeProps) {
  const [pizzaList, setPizzaList] = React.useState<PizzaList[]>([])

  React.useEffect(() => {
    axios
      .get('https://637be23f72f3ce38ea970f85.mockapi.io/items')
      .then((data) => {
        setPizzaList(data.data)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Catigories />
        <SortPizza />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaList.length > 0
          ? pizzaList.map((obj) => (
              <PizzaBlock addToCart={props.addToCart} key={obj.id} {...obj} />
            ))
          : [...new Array(10)].map((_, i) => <SceletonPizzaCard key={i} />)}
      </div>
    </div>
  )
}
