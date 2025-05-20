import React from 'react'

function Testimonial() {
  return (
    <div>


{/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-4 animated slideInDown mb-4">Testimonial</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
        
        {/* <!-- Testimonial Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto" style={{"max-width": "500px"}}>
                <h1 className="display-6 mb-5">What They Say About Our Insurance</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="testimonial-left h-100">
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-1.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-2.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-3.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item text-center">
                            <img className="img-fluid rounded mx-auto mb-4" src="img/testimonial-1.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="img-fluid rounded mx-auto mb-4" src="img/testimonial-2.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="img-fluid rounded mx-auto mb-4" src="img/testimonial-3.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="testimonial-right h-100">
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-1.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-2.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="img/testimonial-3.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}

    </div>
  )
}

export default Testimonial