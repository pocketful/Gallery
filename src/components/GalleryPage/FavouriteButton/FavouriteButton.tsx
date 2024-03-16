import style from './FavouriteButton.module.scss'

type Props = {
  children: string | number
  onClick: () => void
  isFavourite: boolean
  isDisabled?: boolean
}

const FavouriteButton = ({ children, isFavourite, isDisabled = false, onClick }: Props) => {
  return (
    <button
      type="button"
      className={`${style.button} ${isFavourite ? style['button--favourite'] : ''}`}
      aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default FavouriteButton
