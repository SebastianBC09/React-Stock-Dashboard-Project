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
      <aside className="ctn-sidebar">
        <ul className="sidebar-links">
          <li className="sd-logo">
          <FontAwesomeIcon icon={faApple} size="3x"/>
          </li>
          <li className="sd-logo">
          <FontAwesomeIcon icon={faAmazon} size="3x"/>
          </li>
          <li className="sd-logo">
          <FontAwesomeIcon icon={faTwitter} size="3x"/>
          </li>
        </ul>
      </aside>
      <section className="ctn-main-chart">
      </section>
      <section className="ctn-charts">
      </section>
      <section className="ctn-others-charts">
      </section>
    </section>
  );
}

export default App;
