import { PhotoDto } from './photo'

export type PhotosPageDto = {
  page: number
  per_page: number
  total_results: number
  next_page: string
  photos: Array<PhotoDto>
}
