import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>

{/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-dark text-white py-2 px-0 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-phone-alt me-2"></small>
                    <small>90238 13001</small>
                </div>
                
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="far fa-envelope-open me-2"></small>
                    <small>Mayur123@gmail.com</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="far fa-clock me-2"></small>
                    <small>Mon - Fri : 09 AM - 09 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="text-white-50 ms-4" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="text-white-50 ms-4" href=""><i className="fab fa-twitter"></i></a>
                    <a className="text-white-50 ms-4" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="text-white-50 ms-4" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex align-items-center">
            <h1 className="m-0"><img className="img-fluid me-3" src="img/icon/icon-02-primary.png" alt=""/>Myra Finserve</h1>
            
        </a>

        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
                <Link  className="nav-item nav-link active" to='/home'>Home</Link>
                <Link className="nav-item nav-link" to={'/AboutUs'}>About Us</Link>
                <Link  className="nav-item nav-link" to={'OurService'}>Our Services</Link>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu bg-light border-0 m-0">
                        <Link className="dropdown-item"  to={'/Features'}>Features</Link>
                        <Link  className="dropdown-item" to={'/Appointment'}>Appointment</Link>
                        <Link  className="dropdown-item"  to={'TeamMamber'}>Team Members</Link>
                        <Link  className="dropdown-item"  to={'/Testimonial'}>Testimonial</Link>
                        <Link className="dropdown-item"  to={'/Page404'}>404 Page</Link>
                    </div>
                </div>
                <Link  className="nav-item nav-link" to={'/ContactUs'}>Contact Us</Link>
            </div>
        </div>
        <a href="https://www.icicilombard.com/motor-insurance/car-insurance?utm_source=bing_search&utm_medium=CPC&utm_campaign=FourWheeler_Bing_Search_Generic_May24&utm_adgroup=&utm_keyword=insurance%20car&utm_device=c&utm_ad=&utm_placement=&utm_network=o&utm_matchtype=p&msclkid=b48d80e9d4c41cae33f5e66e241e5fab&utm_term=insurance%20car&utm_content=Generic_Car" className="btn btn-primary px-3 d-none d-lg-block">Get A Quote</a>
    </nav>
    {/* <!-- Navbar End --> */}

    

    </div>
  )
}

export default Header