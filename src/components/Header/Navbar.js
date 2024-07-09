import logo from '../../assets/image/logo/logo.png';
import '../../styles/style.css'


const Navbar = () => {
    return ( 
        <header className='header'>
            <div className="navbar">
                <div className='nav-sub'>
                    <div className="logo">
                        <img src={logo} alt="logo" className='img-fluid '/>
                    </div>
                    <div className='course_category'>
                        <i className='bi bi-grid'></i>
                        <span className='ps-3'>Categories</span>
                    </div>
                    <div className='search_bar position-relative'>
                        <input type="search" className='form-control' placeholder='Search...' />
                        <div className='search_bar_icon position-absolute'>
                          <i className='fa fa-search'></i>
                        </div>
                    </div>
                </div>
                
                <div className='links'>
                    <a href='#' className='btn btn-theme-1'>Become an instructor</a>
                    <a href='/login' className='btn btn-theme'>Log in</a>
                    <a href='/signup' className='btn btn-theme-color'>Sign up</a>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;