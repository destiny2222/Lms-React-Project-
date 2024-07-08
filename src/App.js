import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './pages/frontend/Login';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/*" element={<Main />} />
        <Route  path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
