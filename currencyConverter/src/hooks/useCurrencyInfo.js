import React, {useEffect, useState} from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdeliver.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then(response => response.json())
    .then((data) => setData(data[currency]))
    console.log(data)
  }, [currency])

  console.log(data)
  return data
  
} 

export default useCurrencyInfo
