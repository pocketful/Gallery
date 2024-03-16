import { useCallback, useEffect, useMemo, useRef } from 'react'
import debounceLeadingWithDelayCancel from '../utilities/debounceLeadingCancel'

type Props = {
  loading: boolean
  hasNextPage: boolean
  error: string
  onLoadMore: () => void
}

const useInfiniteScroll = ({ loading, hasNextPage, error, onLoadMore }: Props) => {
  const mounted = useRef(false)

  const handleLoadMore = useMemo(
    () =>
      debounceLeadingWithDelayCancel({
        func: onLoadMore,
        delay: 250,
      }),
    [onLoadMore],
  )

  const handleScrollForLoadMore = useCallback(() => {
    // Checks if the user has scrolled near the bottom of the page (tolerance: 200px)
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 200
    if (scrolledToBottom && hasNextPage && !loading && !error) {
      handleLoadMore()
    }
  }, [loading, hasNextPage, error, handleLoadMore])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    window.addEventListener('scroll', handleScrollForLoadMore)
    return () => window.removeEventListener('scroll', handleScrollForLoadMore)
  }, [handleScrollForLoadMore])
}

export default useInfiniteScroll
