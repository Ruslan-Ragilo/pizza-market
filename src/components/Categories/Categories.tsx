import { MouseEvent, useState } from 'react'

const arrSortTitle: string[] = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

type PropsCatigories = {
  activeIndex: number
  onCangeCategory: Function
}

const Catigories: React.FC<PropsCatigories> = ({
  activeIndex,
  onCangeCategory,
}) => {
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
              onCangeCategory(i)
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
