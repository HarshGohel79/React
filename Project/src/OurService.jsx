import React from 'react'

function OurService() {
  return (
    <div>

{/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-4 animated slideInDown mb-4">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Service Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto" style={{"max-width": "500px"}}>
                <h1 className="display-6 mb-5">We Provide professional Insurance Services</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded h-100 p-5">
                        <div className="d-flex align-items-center ms-n5 mb-4">
                            <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                                <img className="img-fluid" src="img/icon/icon-10-light.png" alt=""/>
                            </div>
                            <h4 className="mb-0">Life Insurance</h4>
                        </div>
                        <p className="mb-4">Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <a className="btn btn-light px-3" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded h-100 p-5">
                        <div className="d-flex align-items-center ms-n5 mb-4">
                            <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                                <img className="img-fluid" src="img/icon/icon-01-light.png" alt=""/>
                            </div>
                            <h4 className="mb-0">Health Insurance</h4>
                        </div>
                        <p className="mb-4">Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <a className="btn btn-light px-3" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded h-100 p-5">
                        <div className="d-flex align-items-center ms-n5 mb-4">
                            <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                                <img className="img-fluid" src="img/icon/icon-05-light.png" alt=""/>
                            </div>
                            <h4 className="mb-0">Home Insurance</h4>
                        </div>
                        <p className="mb-4">Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <a className="btn btn-light px-3" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded h-100 p-5">
                        <div className="d-flex align-items-center ms-n5 mb-4">
                            <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                                <img className="img-fluid" src="img/icon/icon-08-light.png" alt=""/>
                            </div>
                            <h4 className="mb-0">Vehicle Insurance</h4>
                        </div>
                        <p className="mb-4">Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <a className="btn btn-light px-3" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded h-100 p-5">
                        <div className="d-flex align-items-center ms-n5 mb-4">
                            <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                                <img className="img-fluid" src="img/icon/icon-07-light.png" alt=""/>
                            </div>
                            <h4 className="mb-0">Business Insurance</h4>
                        </div>
                        <p className="mb-4">Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <a className="btn btn-light px-3" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded h-100 p-5">
                        <div className="d-flex align-items-center ms-n5 mb-4">
                            <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                                <img className="img-fluid" src="img/icon/icon-06-light.png" alt=""/>
                            </div>
                            <h4 className="mb-0">Property Insurance</h4>
                        </div>
                        <p className="mb-4">Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <a className="btn btn-light px-3" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}
    </div>
  )
}

export default OurService