import useLocalStorage from './useLocalStorage'

const useToggleFavourite = () => {
  const { storedValue: favourites, updateStoredValue } = useLocalStorage({
    storageKey: 'favourites',
    initialValue: [],
  })

  const toggleFavourite = (id: number) => {
    const isFavourite = favourites.includes(id)

    const newFavourites = isFavourite
      ? favourites.filter((favourite) => favourite !== id)
      : [...favourites, id]
    updateStoredValue(newFavourites)
  }

  return { favourites, toggleFavourite }
}

export default useToggleFavourite
