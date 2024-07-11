import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo/logo.png';
import google from '../../assets/image/icon/logo-google.png';


const Signup = () => {
    const [passwordType, setPasswordType] = useState('password');
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
                            <h2>Welcome Back</h2>
                            <p>Already have an account? <Link to="/login" className='signup'>Log in</Link></p>
                        </div>
                        <div className='Social-media text-center'>
                            <Link to="#"><img src={google} width={20} className='p-0 me-2' alt="google" />  Sign Up  With Google</Link>
                        </div>
                        <div className='line mb-5'></div>

                        <div className='row'>
                            <form className='form' action='' method='post'>
                                <div className='form-group row mb-4'>
                                    <div className='col-md-6'>
                                        <label htmlFor='firstname' className='pb-3'>First Name</label>
                                        <input type='text' id='firstname' className='form-control' required />
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor='lastname' className='pb-3'>Last Name</label>
                                        <input type='text' id='lastname' className='form-control' required />
                                    </div>
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor='email' className='pb-3'>Email or Phone number</label>
                                    <input type='email' id='email' className='form-control' required />
                                </div>
                                <div className='form-group mb-4' id='Password-toggle'>
                                    <label htmlFor='password' className='pb-3'>Password </label>
                                    <div className='input-group'>
                                        <span className="input-group-text lock" id="basic-addon1"><i className='fa fa-lock'></i></span>
                                        <input type={passwordType} id='password' className='form-control' aria-describedby="basic-addon1" required />
                                        <span className='position-absolute top-50 end-0 eye-slash translate-middle-y pe-3' onClick={() => togglePasswordVisibility(setPasswordType, passwordType)}>
                                            <i className={passwordType === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <input type='checkbox' id='checkbox' className='me-2' /> 
                                    <label htmlFor="checkbox" id='checkbox'>By signing up, you agree to our <Link to="#" className='signup'>Terms & Conditions</Link> and <Link to="#" className='signup'>Privacy Policy</Link></label> 
                                </div>
                                <div className='btn-button pt-4'>
                                    <input type='submit' value='Create Account' className='btn btn-primary  ' />
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

export default Signup