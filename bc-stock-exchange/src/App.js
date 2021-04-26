import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

<<<<<<< HEAD
import { useState } from 'react';
=======
import Axios from 'axios'
>>>>>>> e30c0e3 (API Key variable created. Working on the API connection in order to fetch the stock data.)
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
  
  const getStock = () => {
    fetch(`http://api.marketstack.com/v1/tickers/aapl/eod?access_key=${apiKey}`)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then((data) => {
      setStock(data.name + " " + data.symbol)
    })
=======
  const api_key = process.env.API_KEY;
  const params = {
    acccess_key: api_key,
  }

  
  
  const getStock = () => {
    Axios.get('https://api.marketstack.com/v1/tickers/aapl/eod', {params}).then(
      (response) =>{
        console.log(response)
      })
>>>>>>> e30c0e3 (API Key variable created. Working on the API connection in order to fetch the stock data.)
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
            {stock}
=======
            {/* <Main /> */}
>>>>>>> e30c0e3 (API Key variable created. Working on the API connection in order to fetch the stock data.)
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
