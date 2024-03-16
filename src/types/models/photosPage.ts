import { PhotoModel } from './photo'

export type PhotosPageModel = {
  page: number
  perPage: number
  nextPage: string
  photos: Array<PhotoModel>
}
