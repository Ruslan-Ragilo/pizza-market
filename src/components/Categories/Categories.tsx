import { MouseEvent, useState } from 'react'

const arrSortTitle: string[] = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

type PropsCatigories = {}

const Catigories: React.FC<PropsCatigories> = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScrollCategories = (
    e: MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log(e)
  }

  return (
    <div className="categories">
      <ul>
        {arrSortTitle.map((el, i) => (
          <li
            key={i}
            onClick={() => {
              setActiveIndex(i)
            }}
            className={activeIndex === i ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Catigories
