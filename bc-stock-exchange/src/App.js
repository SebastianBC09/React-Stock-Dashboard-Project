import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    /*<div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
     </div>,*/
    <section className="container-fluid">
      <div className="row">
        <div className="row">
          <div className="col-md-1">
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
            </section>
            <div className="row">
              <div className="col-md-11">
                <section className="ctn-charts glassmorphism-effect">
                </section>
                <div className="row">
                  <div className="col-md-12">
                    <section className="ctn-others-charts">
                      <section className="ctn-chartA"></section>
                      <section className="ctn-chartB"></section>
                      <section className="ctn-chartC"></section>
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
