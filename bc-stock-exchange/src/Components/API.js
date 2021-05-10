import React from 'react';  
import {useState} from 'react'

require('dotenv').config()
const APIKEY = process.env.REACT_APP_STOCK_API_KEY;

function API () {
  const [data, setData] = useState([])

  const getAPI = () => {
    fetch(`http://api.marketstack.com/v1/tickers/aapl/eod?access_key=${APIKEY}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setData(json)
    })
  }

  return (
    <div>
      <p>My API</p>
      <button onClick={getAPI}>Fetch API</button>
      <br/>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}

export default API
