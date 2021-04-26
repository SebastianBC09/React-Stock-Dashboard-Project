import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react';
=======
import Axios from 'axios'
>>>>>>> e30c0e3 (API Key variable created. Working on the API connection in order to fetch the stock data.)
=======
import axios from 'axios';
import { useState } from 'react';
>>>>>>> 32aed48 (Trying to use axios to make the request to the API but theres's an issue saying that cant resolve axios. Trying to use fetch instead.)
require('dotenv').config()

/* import Main from './Components/LineChart'
import Daily from './Components/DayChart' */


function App() {
  
<<<<<<< HEAD
  const apiKey = process.env.API_KEY;
  /* const params = {
    acccess_key: api_key,
  } */

  const [stock, setStock] = useState("")
  
=======
import API from './Components/API'
/* import { useState } from 'react'; */
require('dotenv').config()

function App() {
  
/*   const apiKey = process.env.API_KEY;
  const params = {acccess_key: apiKey} */

/*   const [stock, setStock] = useState("") */
>>>>>>> 04dfe0f54db1cde88ed2225b560832a4d5a0dd69
  const getStock = () => {
    fetch(`http://api.marketstack.com/v1/tickers/aapl/eod?access_key=${apiKey}`)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then((data) => {
      setStock(data.name + " " + data.symbol)
    })
<<<<<<< HEAD
=======
  const api_key = process.env.API_KEY;
  const params = {
    acccess_key: api_key,
  }

  const [stock, setStock] = useState("")
  
  const getStock = () => {
    axios.get('http://api.marketstack.com/v1/tickers/aapl/eod', {params}).then(
      (response) =>{
        console.log(response)
        setStock(response.data.name + " " + response.data.symbol)
      })
>>>>>>> e30c0e3 (API Key variable created. Working on the API connection in order to fetch the stock data.)
=======
>>>>>>> 04dfe0f54db1cde88ed2225b560832a4d5a0dd69
  }
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="row">
          <div className="col-md-1 ">
            <aside className="ctn-sidebar">
              <ul className="sidebar-links">
                <li className="sd-logo" onClick={getStock}>
                  <FontAwesomeIcon icon={faApple} size="3x" />
                </li>
                <li className="sd-logo">
                  <FontAwesomeIcon icon={faAmazon} size="3x" />
                </li>
                <li className="sd-logo">
                  <FontAwesomeIcon icon={faTwitter} size="3x" />
                </li>
              </ul>
            </aside>
          </div>
          <div className="col-md-11">
            <section className="ctn-main-chart glassmorphism-effect">
<<<<<<< HEAD
<<<<<<< HEAD
            {stock}
=======
            {/* <Main /> */}
<<<<<<< HEAD
>>>>>>> e30c0e3 (API Key variable created. Working on the API connection in order to fetch the stock data.)
=======
            {stock}
>>>>>>> 32aed48 (Trying to use axios to make the request to the API but theres's an issue saying that cant resolve axios. Trying to use fetch instead.)
=======
            <API />
>>>>>>> 04dfe0f54db1cde88ed2225b560832a4d5a0dd69
            </section>
            <div className="row">
              <div className="col-md-11">
                <section className="ctn-charts glassmorphism-effect">
                {/* <Daily /> */}
                </section>
                <div className="row">
                  <div className="col-md-11">
                    <section className="ctn-others-charts">
                      <div className="row">
                        <div className="col-md-4">
                          <section className="ctn-chartA glassmorphism-effect"></section>
                        </div>
                        <div className="col-md-4">
                          <section className="ctn-chartB glassmorphism-effect"></section>
                        </div>
                        <div className="col-md-4">
                          <section className="ctn-chartC glassmorphism-effect"></section>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
