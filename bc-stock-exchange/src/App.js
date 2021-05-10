import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import Line from './Components/LineChart'

import API from './Components/API'
/* require('dotenv').config() */

function App() {
  
/*   const apiKey = process.env.API_KEY;
  const params = {acccess_key: apiKey} */

/*   const [stock, setStock] = useState("") */
  /* const getStock = () => {
    fetch(`http://api.marketstack.com/v1/tickers/aapl/eod?access_key=${apiKey}`)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .then((data) => {
      setStock(data.name + " " + data.symbol)
    })

  }
  } */

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="row">
          <div className="col-md-1 ">
            <aside className="ctn-sidebar">
              <ul className="sidebar-links">
                <li className="sd-logo">
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
            <API />
            <Line />
            </section>
            <div className="row">
              <div className="col-md-11">
                <section className="ctn-charts glassmorphism-effect">
                {/* <Line /> */}
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