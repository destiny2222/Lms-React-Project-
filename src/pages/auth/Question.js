import React from 'react'
import logo from '../../assets/image/logo/logo.png';
import { Link } from 'react-router-dom';

const Question = () => {
  return (
    <main>
        <section className="login-section">
            <div className="container-fluid mb-5 mb-lg-1">
                <div className="row">
                    <div className="col-md-12 text-start pt-3">
                        <div className="login-logo">
                            <Link to='/'>
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
                            <h2 className='question-title'>Please Answer A few Questions For Us</h2>
                        </div>
                        <div className='line mb-5'></div>

                        <div className='row'>
                            <form className='form' action='' method='post'>
                                <div className='form-group row mb-4'>
                                    <div className='col-md-6'>
                                        <label htmlFor='stateoforigin' className='pb-3'>State of origin</label>
                                        <select id='stateoforigin' name='' className='form-control'>
                                        <option value='' selected>--Select--</option>
                                        <option value=''>Lagos</option>
                                        <option value=''>Abuja</option>
                                        <option value=''>Kano</option>
                                        </select>
                                    </div>
                                    <div className='col-md-6'>
                                        <label htmlFor='stateofresidence' className='pb-3'>State of residence</label>
                                        <select id='stateofresidence' name='' className='form-control'>
                                        <option value='' selected>--Select--</option>
                                        <option value=''>Lagos</option>
                                        <option value=''>Abuja</option>
                                        <option value=''>Kano</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor='education' className='pb-3'>Education level</label>
                                    <select className='form-control' id='education' name=''>
                                        <option value='' selected>--Select--</option>
                                        <option value=''>High School</option>
                                        <option value=''>Undergraduate</option>
                                        <option value=''>Postgraduate</option>
                                    </select>
                                </div>
                                <div className='form-group mb-4' id='Password-toggle'>
                                    <label htmlFor='gender' className='pb-3'>Gender </label>
                                    <select className='form-control' id='gender' name=''>
                                        <option value='' selected>--Select--</option>
                                        <option value=''>Male</option>
                                        <option value=''>Female</option>
                                        <option value=''>Other</option>
                                    </select>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor='age' className='pb-3'>Age</label>
                                    <input type='text' id='age' className='form-control' required />
                                </div>
                                <div className='py-2'>
                                    <label htmlFor='hear' className='pb-3'>How did you hear about us?</label>
                                    <select id='hear' name='' className='form-control'>
                                        <option value='' selected>--Select--</option>
                                        <option value=''>Social Media</option>
                                        <option value=''>Word of Mouth</option>
                                        <option value=''>Friend or Colleague</option>
                                        <option value=''>Advertisement</option>
                                        <option value=''>Other</option>
                                    </select>
                                </div>
                                <div className='btn-button pt-4'>
                                    <input type='submit' value='Finish' className='btn btn-primary  ' />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='flex-basis50 d-none d-md-block'>
                        <div className='question-img position-relative'>
                            <div className='content position-absolute bottom-0 start-0 p-3'>
                                <p>
                                “Education is the most powerful weapon which you can use to change the world”
                                </p>
                                <span>---Nelson Mandela</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Question