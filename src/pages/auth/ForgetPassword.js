import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo/logo.png';

const ForgetPassword = () => {
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
                            <div className='login-text text-center '>
                                <h2 className='mb-5'>Forgot Password</h2>
                            </div>
                            <div className='row'>
                                <form className='form' action='' method='post'>
                                    <div className='form-group mb-4'>
                                        <label htmlFor='email' className='pb-3'>Email or Phone number</label>
                                        <input type='email' id='email' className='form-control' required />
                                    </div>
                                    <div className='btn-button pt-4'>
                                       <input type='submit' value='Send Recovery Link' className='btn btn-primary  ' />
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

export default ForgetPassword