import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo/logo.png';
import '../../styles/style.css'


const Navbar = () => {
    return ( 
        <header className='header'>
            <div className="navbar">
                <div className='nav-sub'>
                    <div className="logo">
                        <Link to='/'>
                           <img src={logo} alt="logo" className='img-fluid '/>
                        </Link>
                    </div>
                    <nav className='header__category'>
                        <ul>
                            <li>
                                <i className='bi bi-grid'></i>
                                <span className='ps-3'>Categories</span>
                                <ul class="cat-submenu">
                                    <li><a href="course-details.html">English Learning</a></li>
                                    <li><a href="course-details.html">Web Development</a></li>
                                    <li><a href="course-details.html">Logo Design</a></li>
                                    <li><a href="course-details.html">Motion Graphics</a></li>
                                    <li><a href="course-details.html">Video Edition</a></li>
                                </ul>
                            </li>    
                        </ul>    
                    </nav>
                    <div className='search_bar position-relative'>
                        <input type="search" className='form-control' placeholder='Search...' />
                        <div className='search_bar_icon position-absolute'>
                          <i className='fa fa-search'></i>
                        </div>
                    </div>
                </div>
                
                <div className='links'>
                    <a href='#' className='btn btn-theme-1'>Become an instructor</a>
                    <a href='/auth/login' className='btn btn-theme'>Log in</a>
                    <a href='/auth/signup' className='btn btn-theme-color'>Sign up</a>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;