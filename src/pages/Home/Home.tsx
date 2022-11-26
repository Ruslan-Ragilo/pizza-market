import axios from 'axios'
import * as React from 'react'
import { SearchContext } from '../../App'
import Catigories from '../../components/Categories/Categories'
import Pagination from '../../components/Pagination/Pagination'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import SceletonPizzaCard from '../../components/Sceleton/SceletonPizzaCard'
import SortPizza from '../../components/SortPizza/SortPizza'
import { dataSortPizza, PizzaList, search } from '../../types/types'

export interface IHomeProps {
  addToCart: Function
}

export function Home(props: IHomeProps) {
  const [pizzaList, setPizzaList] = React.useState<PizzaList[]>([])
  const [activeIndex, setActiveIndex] = React.useState<number>(0)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [dataSortPizza, setDataSortPizza] = React.useState<dataSortPizza>({
    name: 'по популярности по возрастанию',
    sort: 'rating',
  })
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  const { searchValue, setSearchValue } =
    React.useContext<search>(SearchContext)

  React.useEffect(() => {
    const order = !dataSortPizza.sort.includes('-') ? 'asc' : 'desc'
    const sortBy = dataSortPizza.sort.replace('-', '')
    const category = activeIndex ? `category=${activeIndex}` : ''

    setIsLoading(true)
    axios
      .get(
        `https://637be23f72f3ce38ea970f85.mockapi.io/items?search=${searchValue}&page=${currentPage}&limit=4&${category}&sortby=${sortBy}&order=${order}`
      )
      .then((data) => {
        setPizzaList(data.data)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))

    // window.scrollTo(0, 0)
  }, [activeIndex, dataSortPizza, currentPage, searchValue])

  return (
    <div className="container">
      <div className="content__top">
        <Catigories
          onCangeCategory={(i: number) => setActiveIndex(i)}
          activeIndex={activeIndex}
        />
        <SortPizza
          dataSortPizza={dataSortPizza}
          setDataSortPizza={(data: dataSortPizza) =>
            setDataSortPizza({ ...data })
          }
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoading
          ? pizzaList.map((obj) => (
              <PizzaBlock addToCart={props.addToCart} key={obj.id} {...obj} />
            ))
          : [...new Array(4)].map((_, i) => <SceletonPizzaCard key={i} />)}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={(number) => setCurrentPage(number)}
      />
    </div>
  )
}
