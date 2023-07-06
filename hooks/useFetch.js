import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = (url) => {
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
      setError(error)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // useEffect(() => {
  //   axios
  //     .get(endpoint)
  //     .then((res) => {
  //       setData(res.data)
  //     })
  //     .catch((err) => {
  //       setError(err)
  //     })
  // }, [])

  return { data, error, isLoading }
}

// export const virkopediaData = data.filter(
//   (company) => company?.title !== undefined
// )

// export const companyData = data.filter(
//   (company) => company?.uid !== undefined
// )
