import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = (url: string) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const options = {
    method: 'GET',
    url: url,
  }

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)

      setData(response.data)
      setIsLoading(false)
    } catch (error) {
      //@ts-ignore
      setError(error)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, error, isLoading }
}
