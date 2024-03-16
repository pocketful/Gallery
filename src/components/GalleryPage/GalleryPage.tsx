import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import useLoadPhotos from './hooks/useLoadPhotos'

const GalleryPage = () => {
  const { loading, photos, hasNextPage, error, loadMorePhotos } = useLoadPhotos()
  console.log('photos', photos)

  useInfiniteScroll({ loading, hasNextPage, error, onLoadMore: loadMorePhotos })
}

export default GalleryPage
