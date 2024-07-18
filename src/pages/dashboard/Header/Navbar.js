import React from 'react';
import logo from '../../assets/image/logo/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='top-header'>
        <div className='top-header-left'>
            <div className='top-nav-logo'>
                <Link to="">
                   <img src={logo} />
                </Link>
            </div>
        </div>
        <div className='top-header-right'></div>
    </div>
  )
}

export default Navbar