export type cartItem = {
  id: number
  imageUrl: string
  title: string
  types: string
  sizes: number
  price: number
  total: number
}

export type dataSortPizza = {
  name: string
  sort: string
}

export type PizzaList = {
  id: number
  imageUrl: string
  title: string
  types: string[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

export type search = {
  searchValue: string
  setSearchValue: () => void
}
