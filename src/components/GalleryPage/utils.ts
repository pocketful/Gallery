export const extractDescriptionFromUrl = (url: string, alt: string): string => {
  try {
    return url.split('/')[4].split('-').slice(0, -1).join(' ') || alt || 'Untitled'
  } catch (error) {
    console.error('Error extracting description from URL:', error)
    return alt || 'Untitled'
  }
}
