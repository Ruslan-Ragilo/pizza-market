import { useEffect, useState } from 'react'

interface IPizzaBlockProps {
  id: number
  price: number
  title: string
  rating?: number
  imageUrl: string
  sizes: number[]
  types: string[]
  addToCart: Function
}

const PizzaBlock: React.FunctionComponent<IPizzaBlockProps> = ({
  id,
  price,
  title,
  imageUrl,
  sizes,
  types,
  addToCart,
}) => {
  const [pizzaCount, setPizzaCount] = useState(0)
  const [contentActiveSize, setIndexActiveSize] = useState(sizes[0])
  const [contentActiveType, setIndexActiveType] = useState(types[0])

  useEffect(() => {
    if (pizzaCount > 0) {
      addToCart({
        id,
        imageUrl,
        title,
        types: contentActiveType,
        sizes: contentActiveSize,
        price,
        total: pizzaCount,
      })
    }
  }, [pizzaCount])

  const handleCountPizza = () => {
    setPizzaCount((prev) => prev + 1)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((el, i) => (
              <li
                key={i}
                onClick={() => {
                  setIndexActiveType(el)
                }}
                className={contentActiveType === el ? 'active' : ''}
              >
                {el}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((el, i) => (
              <li
                key={i}
                onClick={() => setIndexActiveSize(el)}
                className={contentActiveSize === el ? 'active' : ''}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div
            onClick={handleCountPizza}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{pizzaCount}</i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaBlock
