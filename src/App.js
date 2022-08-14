import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import GetApod from './components/GetApod';
import {Helmet} from 'react-helmet'

function App() {
  return (
    <div>
      <Helmet>
        <style>{"body { background-image: url(https://apod.nasa.gov/apod/image/2208/SaturnMoon_Sojuel_1824.jpg); }"}</style>
      </Helmet>
      <GetApod />
    </div>
  );
}

export default App;
