// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/image/blog-1.jpg';
import img2 from '../../assets/image/blog-2.jpg';
import img3 from '../../assets/image/blog-3.jpg';
import img4 from '../../assets/image/blog-4.jpg';
import google from "../../assets/image/logos_google.png";
import skill  from '../../assets/image/skill-icons_aws-dark.png';
import art from '../../assets/image/image 6.png';
import edo from '../../assets/image/logo/logo.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Home = () => {
    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll:2,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: (
            <div>
              <div className="next-slick-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
              </div>
            </div>
          ),
      
          prevArrow: (
            <div>
              <div className="next-slick-arrow rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
              </div>
            </div>
          ),
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
          ]
    };
    return ( 
        <main>
            {/* hero section */}
            <section className="hero-section pt-50 pb-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6 mb-lg-0 mb-4">
                            <div className="hero-content">
                                <span>Start To Success</span>
                                <h2 className="title">
                                    Access To <span className="title-span">100+</span> course  from <span className="title-span">50+</span> instructors & institutions.
                                </h2>
                                <div className="hero-search">
                                    <form action="" className="" method="">
                                        <div className="row">
                                            <div className="col-md-6 col-8">
                                                <div className="position-relative">
                                                <input type="search" placeholder="Search course and article" className="form-control" />
                                                    <div className="position-absolute search-icon">
                                                        <i className="fa fa-search"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-4">
                                                <button type="submit" className="btn btn-theme-color">Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-lg-0 mb-lg-0">
                            <div className="hero-image">
                                <div className="row align-items-center">
                                    <div className="col-md-6 col-12 mb-lg-0 mb-4">
                                        <img src={img1} alt="hero-image" className='img-fluid' />
                                    </div>
                                    <div className="col-md-6 col-12 mb-lg-0 mb-4">
                                        <div className="row">
                                            <div className="col-md-12 col-6 mb-4">
                                            <img src={img2} alt='hero-image'  className='img-fluid'/>
                                            </div>
                                            <div className="col-md-12 col-6 mb-4">
                                            <img src={img3} alt="hero-image" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end section */}

            {/* startup section */}
            <section className="startup-section pt-4 pb-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-xl-3 col-6 mb-lg-0 mb-4">
                            <div className='startup-card gap-4'>
                                <div className='startup-card-icon'>
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className='startup-card-text'>
                                    <h6>Learn The</h6>
                                    <h6>Essential Skills</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xl-3 col-6 mb-lg-0 mb-4">
                            <div className='startup-card gap-4'>
                                <div className='startup-card-icon'>
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className='startup-card-text'>
                                    <h6>Learn The</h6>
                                    <h6>Essential Skills</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xl-3 col-6 mb-lg-0 mb-4">
                            <div className='startup-card gap-4'>
                                <div className='startup-card-icon'>
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className='startup-card-text'>
                                    <h6>Learn The</h6>
                                    <h6>Essential Skills</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xl-3 col-6 mb-lg-0 mb-4">
                            <div className='startup-card gap-4'>
                                <div className='startup-card-icon'>
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className='startup-card-text'>
                                    <h6>Learn The</h6>
                                    <h6>Essential Skills</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end section */}

            {/* categories */}
            <section className='top-categories pt-50 pb-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='title-h2'>Top Categories</h2>
                            <p className='subtitle-p'>Explore courses from various disciplines ranging from soft skills to practical industrial hands-on skills</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-xl-12 col-12'>
                            <div className='categories-card'>
                                <div className='categories-box'>
                                   <h5>Public Speaking</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>Frontend Engineering</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>Entrepreneurship</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>Craftwork</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>SME  Management</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>Graphic Design</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>Content Writing</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>Technical</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>Catering</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>Human Resource Management</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>Computer Introduction</h5>
                                </div>
                                <div className='categories-box'>
                                   <h5>Film Making</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end section */}

            {/* popular courses */}
            <section className='popular-courses pt-50 pb-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='title-h2'>Highest  Reviewed</h2>
                            <p className='subtitle-p'>Our most popular courses, reviewed and rated by learners overtime. you cannot go wrong with them.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-lg-0 mb-4 '>
                            <div className='popular-card card shadow-lg'>
                                <div className='image-container'>
                                    <img src={img4} alt='' />
                                    <div className='play-video'>
                                        <i className='fa-regular fa-circle-play'></i>
                                    </div>
                                </div>
                                <div className='popular-body p-4'>
                                    <div className='category'>
                                        <span className='badge badge-outline-success'>Beginner</span>
                                    </div>
                                    <h4 className='title'>Colour Grading with Computational photography</h4>
                                    <div className='rating'>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa-regular fa-star'></i></Link>
                                        <span className='rating-count ps-2'>(1.2k  learners)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-lg-0 mb-4 '>
                            <div className='popular-card card shadow-lg'>
                                <div className='image-container'>
                                    <img src={img4} alt='' />
                                    <div className='play-video'>
                                        <i className='fa-regular fa-circle-play'></i>
                                    </div>
                                </div>
                                <div className='popular-body p-4'>
                                    <div className='category'>
                                        <span className='badge badge-outline-warning'>Beginner</span>
                                    </div>
                                    <h4 className='title'>Public Speaking And Engagement</h4>
                                    <div className='rating'>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa-regular fa-star'></i></Link>
                                        <span className='rating-count ps-2'>(1.2k  learners)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-lg-0 mb-4 '>
                            <div className='popular-card card shadow-lg'>
                                <div className='image-container'>
                                    <img src={img4} alt='' />
                                    <div className='play-video'>
                                        <i className='fa-regular fa-circle-play'></i>
                                    </div>
                                </div>
                                <div className='popular-body p-4'>
                                    <div className='category'>
                                        <span className='badge badge-outline-success'>Beginner</span>
                                    </div>
                                    <h4 className='title'>catering etiquette and best practices</h4>
                                    <div className='rating'>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa-regular fa-star'></i></Link>
                                        <span className='rating-count ps-2'>(1.2k  learners)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-lg-0 mb-4 '>
                            <div className='popular-card card shadow-lg'>
                                <div className='image-container'>
                                    <img src={img4} alt='' />
                                    <div className='play-video'>
                                        <i className='fa-regular fa-circle-play'></i>
                                    </div>
                                </div>
                                <div className='popular-body p-4'>
                                    <div className='category'>
                                        <span className='badge badge-outline-danger'>Expert</span>
                                    </div>
                                    <h4 className='title'>Shorthand Writing for on-the-go efficiency</h4>
                                    <div className='rating'>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa fa-star'></i></Link>
                                        <Link to="#"><i className='fa-regular fa-star'></i></Link>
                                        <span className='rating-count ps-2'>(1.2k  learners)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* end section */}


            {/* signup section */}
            <section className='help-section '>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                            <div className='help-content '>
                                <div className='help-icon'>
                                   <i className="fab fa-hire-a-helper"></i> 
                                </div>
                                <div className='help-des'>
                                    <h2>Need Help?</h2>
                                    <p>not sure where to begin or which course to take</p>
                                </div>
                                <div className='help-button'>
                                    <Link to="#" className='btn btn-theme-color'>Signup</Link>
                                </div>
                            </div>     
                        </div>  
                    </div>
                </div>
            </section>

            <section className='become-section pt-50 pb-50'>
                <div class="browser-course-area">
                    <div class="container">
                        <div className="row">
                            <div className="col-12 col-xl-6 col-lg-6 col-md-12 mb-lg-0 mb-4 ">
                                <div className="browser-course-wrapper course-height browser-course-bg-1">
                                    <div className="browser-course-content pb-lg-0 pb-4">
                                        <div className="browser-course-tittle mb-lg-0 mb-4 ">
                                            <Link to="#">Become An Instructor</Link>
                                        </div>
                                        <p>Create impact along with thousands of people around the world and teach millions of students</p>
                                        <div className="browser-btn">
                                          <Link to="" className="btn btn-theme-color">Start Teaching Today</Link>
                                        </div>
                                    </div>
                                    <div className="browser-course-bg">
                                        <img src={img3} alt="image not found" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 mb-lg-0 mb-4 ">
                                <div className="browser-course-wrapper course-height browser-course-bg-2 ">
                                    <div className="browser-course-content pb-lg-0 pb-4">
                                        <div className="browser-course-tittle">
                                            <Link to="#">Transform Access To Education</Link>
                                        </div>
                                        <p>Create an account to receive our official newsletter, course recommendation and promotion</p>
                                        <div className="browser-btn">
                                           <Link to="" className="btn btn-theme-color" >Start Teaching Today</Link>
                                        </div>
                                    </div>
                                    <div className="browser-course-bg">
                                        <img src={img4} alt="image not found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* partner section */}
            <section className='partner-section pt-50 pb-50 '>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-12 col-xl-5 col-md-12 col-lg-5 col-sm-12'>
                            <h2 className='title'>Who Will You Learn With?</h2>
                            <p>Here are the stakeholders working with us to create impact in the south-south</p>
                        </div>
                        <div className='col-12 col-xl-7 col-md-12 col-lg-7 col-sm-12'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='thumb-img'>
                                    <img src={google}  width={150} height={150}/>
                                    </div>
                                    <div className='thumb-img'>
                                    <img src={skill} width={150} height={150} />
                                    </div>
                                    <div className='thumb-img'>
                                    <img src={art} width={150} height={150}/>
                                    </div>
                                    <div className='thumb-img'>
                                    <img src={edo} width={150} height={150} />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home