import { useState } from 'react'

type Props = {
  storageKey: string
  initialValue: number[]
}

const useLocalStorage = ({ storageKey, initialValue }: Props) => {
  const initializeStoredValue = () => {
    try {
      const value = window.localStorage.getItem(storageKey)
      return value ? (JSON.parse(value) as number[]) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState<Array<number>>(initializeStoredValue())

  const updateStoredValue = (newValue: number[]) => {
    try {
      setStoredValue(newValue)
      window.localStorage.setItem(storageKey, JSON.stringify(newValue))
    } catch (error) {
      console.error(error)
    }
  }

  return { storedValue, updateStoredValue }
}

export default useLocalStorage
