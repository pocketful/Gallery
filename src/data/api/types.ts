import { PhotosPageDto } from '../../types/dtos/photosPage'

export type ErrorResponse = {
  error: string
}

export type FetchPhotosResponse = PhotosPageDto | ErrorResponse
