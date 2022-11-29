import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveIndex,
  setCategories,
} from '../../redux/slices/categoriesSlice'
import { RootState } from '../../redux/store'

const arrSortTitle: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Острые']

const Catigories: React.FC = () => {
  const getCategoriesData = useSelector(
    (state: RootState) => state.categoriesReducer.activeIndex
  )

  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {arrSortTitle.map((el, i) => (
          <li
            key={i}
            onClick={(e) => {
              dispatch(setActiveIndex(i))
              dispatch(setCategories(el.toLocaleLowerCase()))
            }}
            className={getCategoriesData === i ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Catigories
