import FavouriteButton from '../FavouriteButton/FavouriteButton'
import style from './PhotoCard.module.scss'
import { extractDescriptionFromUrl } from '../utils'
import { useState } from 'react'
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
  const [imageLoadError, setImageLoadError] = useState(false)

  const handleImageError = () => {
    setImageLoadError(true)
  }

  const srcSet = `${src.medium} 350w, ${src.large} 940w`
  const sizes = `(max-width: 350px) calc((100vw - 20px - 10px) / 2),
                 (max-width: 576px) calc((100vw - 30px - 15px) / 2),
                 (max-width: 768px) calc((100vw - 40px - 40px) / 3),
                 (max-width: 1200px) calc((100vw - 60px - 50px) / 3),
                 calc((100vw - 100px - 100px) / 3)`

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
      {!imageLoadError ? (
        <img
          loading="lazy"
          src={src.medium}
          srcSet={srcSet}
          sizes={sizes}
          className={style.photo}
          alt={alt || `Photo by ${photographer}`}
          onError={handleImageError}
        ></img>
      ) : (
        <p className={style.error}>Image failed to load.</p>
      )}
    </article>
  )
}

export default PhotoCard
