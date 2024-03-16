import { PhotoDto } from '../../../types/dtos/photo'
import { PhotoModel } from '../../../types/models/photo'

export const transformPhotoDto = (photo: PhotoDto): PhotoModel => ({
  id: photo.id,
  width: photo.width,
  height: photo.height,
  url: photo.url,
  photographer: photo.photographer,
  alt: photo.alt,
  src: {
    large: photo.src.large,
    medium: photo.src.medium,
  },
})

export const transformPhotoDtos = (photos: Array<PhotoDto>): Array<PhotoModel> =>
  photos.map(transformPhotoDto)
