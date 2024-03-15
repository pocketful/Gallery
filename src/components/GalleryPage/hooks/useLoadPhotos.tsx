import { useEffect, useState } from 'react'
import { FETCH_PHOTOS_URL } from '../../../constants/api'
import { transformPhotosPageDto } from '../../../data/api/transformers/photosPage'
import { fetchPhotoPage } from '../../../data/api/fetchPhotoPage'
import { PhotoModel } from '../../../types/models/photo'

const useLoadPhotos = () => {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<PhotoModel[]>([])
  const [hasNextPage, setHasNextPage] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)

  // Append newly fetched photos to existing list, preventing duplicates
  const appendMorePhotos = (newPhotos: PhotoModel[]) => {
    setPhotos((prevPhotos) => {
      const existingIds = prevPhotos.map((photo) => photo.id)
      const uniqueNewPhotos = newPhotos.filter((photo) => !existingIds.includes(photo.id))
      return [...prevPhotos, ...uniqueNewPhotos]
    })
  }

  useEffect(() => {
    const fetchPhotos = async () => {
      setError('')
      setLoading(true)

      try {
        const photoPageResp = await fetchPhotoPage(`${FETCH_PHOTOS_URL}&page=${page}`)

        if ('error' in photoPageResp) {
          setError(photoPageResp.error)
          return
        }

        const photoPage = transformPhotosPageDto(photoPageResp)

        // Fetched photos list is empty
        if (photoPage.photos.length === 0) {
          setError('No photos found.')
          setHasNextPage(false)
        }

        // It's not the first render
        if (page > 1) {
          // Append newly fetched photos to the existing photos list
          appendMorePhotos(photoPage.photos)
          // No more next pages available
          if (!photoPage.nextPage) {
            setHasNextPage(false)
          }
        } else {
          // It's the first render
          // There's only one page of photos
          if (!photoPage.nextPage) {
            setHasNextPage(false)
          }
          setPhotos(photoPage.photos)
        }
      } catch (err) {
        console.error((err as Error).message)
        setError('Failed to fetch photos. Try again later.')
      } finally {
        setLoading(false)
      }
    }
    void fetchPhotos()
  }, [page])

  const loadMorePhotos = () => {
    console.log('loadMorePhotos')

    setPage((prevPage) => prevPage + 1)
  }

  return { loading, photos, hasNextPage, error, loadMorePhotos }
}

export default useLoadPhotos
