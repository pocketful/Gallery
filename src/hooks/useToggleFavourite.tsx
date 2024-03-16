import { useState } from 'react'

const useToggleFavourite = () => {
  const storedFavourites = localStorage.getItem('favourites')
  const initialFavourites: number[] = storedFavourites
    ? (JSON.parse(storedFavourites) as number[])
    : []

  const [favourites, setFavourites] = useState<number[]>(initialFavourites)

  const toggleFavourite = (id: number) => {
    setFavourites((prevFavourites) => {
      const isFav = prevFavourites.includes(id)

      const newFavourites = isFav
        ? prevFavourites.filter((favourite) => favourite !== id)
        : [...prevFavourites, id]
      localStorage.setItem('favourites', JSON.stringify(newFavourites))
      return newFavourites
    })
  }

  return { favourites, toggleFavourite }
}

export default useToggleFavourite
