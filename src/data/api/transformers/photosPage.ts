import { PhotosPageDto } from '../../../types/dtos/photosPage'
import { PhotosPageModel } from '../../../types/models/photosPage'
import { transformPhotoDtos } from './photos'

export const transformPhotosPageDto = (photosPage: PhotosPageDto): PhotosPageModel => ({
  page: photosPage.page,
  perPage: photosPage.per_page,
  nextPage: photosPage.next_page,
  photos: transformPhotoDtos(photosPage.photos),
})
