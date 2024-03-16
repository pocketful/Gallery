import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import useLoadPhotos from './hooks/useLoadPhotos'
import Container from '../UI/Container/Container'
import Error from '../UI/Error/Error'
import Loader from '../UI/Loader/Loader'
import PhotoCardList from './PhotoCardList/PhotoCardList'

const GalleryPage = () => {
  const { loading, photos, hasNextPage, error, loadMorePhotos } = useLoadPhotos()

  useInfiniteScroll({ loading, hasNextPage, error, onLoadMore: loadMorePhotos })

  return (
    <Container>
      <h1>Photo Gallery</h1>
      <section>
        {error ? <Error>{error}</Error> : <PhotoCardList photos={photos} />}
        {loading && hasNextPage && <Loader />}
      </section>
    </Container>
  )
}

export default GalleryPage
