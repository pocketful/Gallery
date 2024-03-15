import { API_KEY } from '../../constants/api'
import { ErrorResponse, PageData } from '../../types/types'

export const fetchPageData = async (url: string): Promise<PageData | ErrorResponse> => {
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
      const errorMessage = `Request failed with status code: ${response.status}`
      return { error: errorMessage }
    }
    const data = (await response.json()) as PageData
    return data
  } catch (error) {
    return { error: (error as Error).message }
  }
}
