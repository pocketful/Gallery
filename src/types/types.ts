export type ErrorResponse = {
  error: string
}

type PageObject = {
  page: number
  per_page: number
  total_results: number
  next_page: string
}

export type Photo = {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string | null
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  liked: boolean
  alt: string
}

export type PageData = PageObject & { photos: Photo[] }
