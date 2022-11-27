import axios from 'axios'
import * as React from 'react'
import Catigories from '../../components/Categories/Categories'
import Pagination from '../../components/Pagination/Pagination'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import SceletonPizzaCard from '../../components/Sceleton/SceletonPizzaCard'
import SortPizza from '../../components/SortPizza/SortPizza'
import { PizzaList } from '../../types/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export interface IHomeProps {
  addToCart: Function
}

export function Home(props: IHomeProps) {
  const [pizzaList, setPizzaList] = React.useState<PizzaList[]>([])

  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const getSortData = useSelector((state: RootState) => state.sortReducer)
  const getCategoriesData = useSelector(
    (state: RootState) => state.categoriesReducer
  )
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  const FilterPizza = pizzaList.filter((el) => {
    if (getCategoriesData.value === 'все') {
      return el
    } else {
      return el.category.join('').includes(getCategoriesData.value)
    }
  })

  React.useEffect(() => {
    const order = getSortData.sort.includes('-') ? 'desc' : 'asc'
    const sortBy = getSortData.sort.replace('-', '')
    // const category = activeIndex ? `category=${activeIndex}` : ''

    setIsLoading(true)

    axios
      .get(
        `https://637be23f72f3ce38ea970f85.mockapi.io/items?search=${''}&page=${currentPage}&limit=4&sortby=${sortBy}&order=${order}`
      )
      .then((data) => {
        setPizzaList(data.data)
        setIsLoading(false)

        // console.log(pizzasFilterCategory)
      })
      .catch((e) => console.log(e))

    // window.scrollTo(0, 0)
  }, [getSortData, currentPage, getCategoriesData])

  return (
    <div className="container">
      <div className="content__top">
        <Catigories />
        <SortPizza />
      </div>
      <h2 className="content__title">
        {`${getCategoriesData.value
          .charAt(0)
          .toUpperCase()}${getCategoriesData.value.slice(1)} `}
        пиццы
      </h2>
      <div className="content__items">
        {!isLoading
          ? FilterPizza.map((obj) => (
              <PizzaBlock addToCart={props.addToCart} key={obj.id} {...obj} />
            ))
          : [...new Array(4)].map((_, i) => <SceletonPizzaCard key={i} />)}
      </div>
      {/* {FilterPizza.length != 0 && !isLoading ? ( */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={(number) => setCurrentPage(number)}
      />
      {/* ) : (
        'Пицц не найдено'
      )} */}
    </div>
  )
}
