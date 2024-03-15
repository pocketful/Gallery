export type PhotoModel = {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  alt: string
  src: {
    large: string
    medium: string
  }
}
