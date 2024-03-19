export const BASE_URL = import.meta.env.VITE_PEXELS_BASE_URL
if (!BASE_URL || typeof BASE_URL !== 'string') throw new TypeError('baseUrl not found')

export const API_KEY = import.meta.env.VITE_PEXELS_API_KEY
if (!API_KEY || typeof API_KEY !== 'string') throw new TypeError('apiKey not found')

export const PER_PAGE: number = 18

export const FETCH_PHOTOS_URL: string = `${BASE_URL}/curated?per_page=${PER_PAGE}`
