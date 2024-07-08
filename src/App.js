import './App.css';
import Navbar from './components/Header/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/frontend/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='content-body'>
          <Home  />
        </div>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
