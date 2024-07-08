import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo/logo.png';
import google from '../../assets/image/icon/logo-google.png';
import img1 from '../../assets/image/login-img.png';
const login = () => {
    return ( 
        <main>
            <section className="login-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-start pt-5">
                            <div className="login-logo">
                                <img src={logo} className='img-fluid ' width={150} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-md-6'>
                            <div className='login-text text-center'>
                              <h2>Welcome Back</h2>
                              <p>New to our platform? <Link to="#" className='signup'>Sign Up</Link></p>
                            </div>
                            <div className='Social-media text-center'>
                                <Link to="#"><img src={google} width={20} className='p-0 me-2' alt="google" />  Sign In With Google</Link>
                            </div>
                            <div className='line mb-5'></div>

                            <div className='row'>
                                <form action='' method='post'>
                                    <div className='form-group mb-4'>
                                        <label For='email' className='pb-3'>Email or Phone number</label>
                                        <input type='email' id='email' className='form-control' required />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <label For='password' className='pb-3'>Password </label>
                                        <div className='input-group'>
                                         <span class="input-group-text" id="basic-addon1"><i className='fa fa-lock'></i></span>
                                         <input type='password' id='password' className='form-control' aria-describedby="basic-addon1" required />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='login-img'>
                                <img src={img1}  className='img-fluid' alt="login" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default login;