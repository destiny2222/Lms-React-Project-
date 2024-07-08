import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/frontend/About'
import Home from '../../pages/frontend/Home'

const Main = () => {
  return (
    <div className='content-body'>
        <Navbar />
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/about" element={<About />} />
            </Routes>
        <Footer />
    </div>
  )
}

export default Main