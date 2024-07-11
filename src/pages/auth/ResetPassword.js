import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo/logo.png';

const ResetPassword = () => {
    const [passwordType,  setPasswordType] = useState('password')
    const [passwordType1,  setPasswordType1] = useState('password')

    const togglePasswordVisibility = (setter, currentType) => {
        setter(currentType === 'password' ? 'text' : 'password');
    };
  return (
    <main>
        <section className="login-section">
            <div className="container-fluid mb-5 mb-lg-1">
                <div className="row">
                    <div className="col-md-12 text-start pt-3">
                        <div className="login-logo">
                            <Link to="/">
                            <img src={logo} className='img-fluid' width={150} alt="logo" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-5 pb-5">
                <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center gap-5'>
                    <div className='flex-basis50 flex-lg-basis30'>
                        <div className='login-text text-center'>
                            <h2>Create New Password</h2>
                            <p>This password should be different from the previous password.</p>
                        </div>

                        <div className='row'>
                            <form className='form' action='' method='post'>
                                <div className='form-group mb-4'>
                                <label htmlFor='password' className='pb-3'>Password </label>
                                    <div className='input-group'>
                                        <input type={passwordType} id='password' className='form-control' aria-describedby="basic-addon1" required />
                                        <span className='position-absolute top-50 end-0 eye-slash translate-middle-y pe-3' onClick={() => togglePasswordVisibility(setPasswordType, passwordType)}>
                                            <i className={passwordType === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='form-group mb-4' id='Password-toggle'>
                                    <label htmlFor='password' className='pb-3'>Confirm password </label>
                                    <div className='input-group'>
                                        <input type={passwordType1} id='password' className='form-control' aria-describedby="basic-addon1" required />
                                        <span className='position-absolute top-50 end-0 eye-slash translate-middle-y pe-3' onClick={() => togglePasswordVisibility(setPasswordType1, passwordType1)}>
                                            <i className={passwordType1 === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='btn-button pt-4'>
                                  <input type='submit' value='Reset Password' className='btn btn-primary  ' />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='flex-basis50 d-none d-md-block'>
                        <div className='login-img position-relative'>
                            <div className='content position-absolute bottom-0 start-0 p-3'>
                                <p>
                                “The tallest trees sometimes grow from the smallest seeds”
                                </p>
                                <span>---- Matshona Dhliwayo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default ResetPassword