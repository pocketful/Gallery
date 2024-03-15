import { API_KEY } from '../../constants/api'
import { PhotosPageDto } from '../../types/dtos/photosPage'
import { FetchPhotosResponse } from './types'

export const fetchPhotoPage = async (url: string): Promise<FetchPhotosResponse> => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: API_KEY,
    },
  }
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      return { error: response.statusText }
    }
    return (await response.json()) as PhotosPageDto
  } catch (err) {
    return { error: (err as Error).message }
  }
}
