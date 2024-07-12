import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import '@heroicons/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './pages/auth/Login';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Signup from './pages/auth/Signup';
import Question from './pages/auth/Question';
import ForgetPassword from './pages/auth/ForgetPassword';
import ResetPassword from './pages/auth/ResetPassword';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/*" element={<Main />} />
        <Route  path="/auth/login" element={<Login />} />
        <Route  path="/auth/signup" element={<Signup />} />
        <Route path='/auth/question' element={<Question />} />
        <Route path='/auth/forgetpassword' element={<ForgetPassword />} />
        <Route path='/auth/resetpassword' element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
