import logo from '../../assets/image/logo/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return ( 
       <footer className="footer pt-5 pb-5">
            <div className="container">
                <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className='footer-widget'>
                        <h2 className='footer-widget-title'>About Us</h2>
                        <ul className='footer-menu'>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Instructors</Link></li>
                            <li><Link to="/">Events</Link></li>
                            <li><Link to="/">Become A Teacher</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className='footer-widget'>
                        <h2 className='footer-widget-title'>Links</h2>
                        <ul className='footer-menu'>
                            <li><Link to="/">News And Blogs</Link></li>
                            <li><Link to="/">Library</Link></li>
                            <li><Link to="/">Gallery</Link></li>
                            <li><Link to="/">Events</Link></li>
                            <li><Link to="/">Partners</Link></li>
                            <li><Link to="/">Career</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                    <div className='footer-widget'>
                        <h2 className='footer-widget-title'>Support</h2>
                        <ul className='footer-menu'>
                            <li><Link to="/">Documentation</Link></li>
                            <li><Link to="/">FAQs</Link></li>
                            <li><Link to="/">Forum</Link></li>
                            <li><Link to="/">Sitemap</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="footer-content text-center">
                        <div className="footer-logo">
                            <Link to='/'>
                            <img src={logo} alt="logo" className='img-fluid '/>
                            </Link>
                        </div>
                        <div className="footer-widget">
                            <div className='footer-social-icon mb-4'>
                                <Link to="#"><i className='fab fa-twitter'></i></Link>
                                <Link to="#"><i className='fab fa-facebook'></i></Link>
                                <Link to="#"><i className='fab fa-linkedin'></i></Link>
                                <Link to="#"><i className='fab fa-youtube'></i></Link>
                            </div>
                            <p className='copyright mb-3'>Copyright 2024, Edo Innovates</p>
                            <Link to="#" className='terms ps-4'>Terms Of Use</Link>
                            <Link to="#" className='terms ps-4'>Privacy Policy</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
       </footer>
    );
}
 
export default Footer;