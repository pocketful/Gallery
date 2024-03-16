import FavouriteButton from '../FavouriteButton/FavouriteButton'
import style from './PhotoCard.module.scss'
import { extractDescriptionFromUrl } from '../utils'
import { PhotoModel } from '../../../types/models/photo'

type Props = {
  onToggleFavourite: (id: number) => void
  isFavourite: boolean
}

const PhotoCard = ({
  id,
  url,
  photographer,
  alt,
  src,
  onToggleFavourite,
  isFavourite,
}: PhotoModel & Props) => {
  return (
    <article className={style.card}>
      <div className={style.content}>
        <h2 className={style.description}>{extractDescriptionFromUrl(url, alt)}</h2>
        <p className={style.photographer}>{photographer}</p>

        {/* Dynamic button color based on whether it's a favorite */}
        <FavouriteButton onClick={() => onToggleFavourite(id)} isFavourite={isFavourite}>
          Favourite
        </FavouriteButton>
      </div>

      <img
        loading="lazy"
        src={src.medium}
        className={style.photo}
        alt={alt || `Photo by ${photographer}`}
      ></img>

      <p className={style.error}>Image failed to load.</p>
    </article>
  )
}

export default PhotoCard
