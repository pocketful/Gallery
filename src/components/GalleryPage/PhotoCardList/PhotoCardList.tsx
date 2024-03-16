import useToggleFavourite from '../../../hooks/useToggleFavourite'
import PhotoGrid from '../PhotoGrid/PhotoGrid'
import PhotoCard from '../PhotoCard/PhotoCard'
import { PhotoModel } from '../../../types/models/photo'

type Props = {
  photos: PhotoModel[]
}

const PhotoCardList = ({ photos }: Props) => {
  const { favourites, toggleFavourite } = useToggleFavourite()
  return (
    <PhotoGrid>
      {photos.map((photo) => {
        const isFavourite = favourites.includes(photo.id)
        return (
          <PhotoCard
            key={photo.id}
            {...photo}
            onToggleFavourite={toggleFavourite}
            isFavourite={isFavourite}
          />
        )
      })}
    </PhotoGrid>
  )
}

export default PhotoCardList
