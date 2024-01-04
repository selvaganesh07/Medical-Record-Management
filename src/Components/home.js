import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23 } from '../assest/Images/index';
import { aboutbg, aboutus, teamM1, teamM2, teamM3, teamM4, contactusbg, footerlogo } from '../assest/Images/index';
import { Link } from 'react-router-dom';
// import axios from "axios";
// import { useEffect, useState } from "react";
import '../CSS Files/home.css';
function Home() {

    return (
        <div className="">
            {/* Nav bar part----------------------------------------------- */}
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid ps-4">
                    <a className="navbar-brand ms-3 col-4" href="#"><img src={img1} style={{ height: "50px", width: "50px", borderRadius: "50%" }} /><b className="fs-4 "></b> Pharmacy
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-4 collapse navbar-collapse ps-2" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-lg-0 fw-normal fs-5">
                            <li className="nav-item" style={{ marginRight: "30px", marginLeft: "" }}>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item" style={{ marginRight: "30px" }}>
                                <a className="nav-link" href="#about">About</a>
                            </li>
                          
                            <li className="nav-item" style={{ marginRight: "30px" }}>
                                <a className="nav-link" href="#contactus">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className=' col-4 collapse navbar-collapse ps-2 p-1' id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mx-auto fw-normal fs-5">
                            <li className="nav-item" style={{ marginRight: "30px", marginLeft: "" }}>
                                <Link to="/signup" style={{ textDecoration: "none" }} className="text-dark"> <i className="bi bi-person"></i> Sign Up</Link></li>
                            <li className="nav-item">
                                <Link to="/signin" style={{ textDecoration: "none" }} className="text-dark"> <i className="bi bi-box-arrow-in-right"></i> Sign in</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            {/* ----------------------------------------------------------------- */}
            {/* Home page part */}
            <section style={{ backgroundColor: " rgb(239, 251, 252);" }}>

                {/* Opening Part Section */}
                <section>
                    <div className='container pt-5 d-flex flex-wrap' style={{}}>
                        <div className='text-center col-lg-6 col-sm-12 ' style={{ padding: "70px 30px" }}>
                            <h4 style={{ fontStyle: "oblique" }}>"Medication is our business - your health,<br />our mission. "</h4>
                            <p className=" text-center " style={{ fontSize: "19px" }}>A pharmacy that respects the autonomy and dignity of each patient. A pharmacy that promotes the right of self-determination and recognizes individual self-worth by encouraging patients to participate in decisions about their health. A pharmacy communicates with patients in terms that are understandable. In all cases, this is the pharmacy that respects personal and cultural differences among patients.</p>
                        </div>
                        <div className="p-3 col-lg-6 col-sm-12 " style={{}}>
                            <img src={img2} style={{ height: "100%", width: "100%" }} />
                        </div>
                    </div>
                </section>

                {/* Crousal part */}
                <section>
                    <div id="carouselExampleControls" className="carousel slide container-sm mt-5 mb-4"
                        data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img3} style={{ height: "400px", borderRadius: "10px" }} className="d-block w-100"
                                    alt="carousel Images" />
                            </div>
                            <div className="carousel-item active">
                                <img src={img4} style={{ height: "400px", borderRadius: "10px" }} className="d-block w-100"
                                    alt="carousel Images" />
                            </div>
                            <div className="carousel-item active">
                                <img src={img5} style={{ height: "400px", borderRadius: "10px" }} className="d-block w-100"
                                    alt="carousel Images" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>

                {/* Categories part */}
                <section>
                    <div className="container mt-5">
                        <h3 className='text-center text-success'>Category Available <i className="bi bi-card-list"></i></h3>
                        <div className="d-flex flex-wrap">
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img6} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body">
                                    <p className=" mt-3 fs-5 fw-semibold">Cold and Cough</p>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img7} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <p className="mt-3 fs-5 fw-semibold"  >Eye Care</p>
                                </div>
                            </div>

                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img8} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <p className="mt-3 fs-5 fw-semibold"  >Baby Care</p>
                                </div>
                            </div>

                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img9} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body">
                                    <p className="mt-3 fs-5 fw-semibold" >Healthy Drinks</p>
                                </div>
                            </div>

                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img10} className="card-img-top category-Product-img" alt="..." />
                                <div className='text-center card-body'>
                                    <p className="mt-3  fs-5 fw-semibold">Skin Care</p>
                                </div>
                            </div>

                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img11} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <p className=" categoryProduct fs-5 fw-semibold mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >HealthCare Devices</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Product part */}
                <section>
                    <div className="container mt-5">
                        <h3 className='text-center text-success'>Products Available <i className="bi bi-capsule-pill"></i></h3>
                        <div className="d-flex flex-wrap">
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img12} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body">
                                    <div className='text-center'>
                                        <button className=" mt-3  categoryProduct  btn fs-5 fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" >Vicks Vaporub</button>
                                    </div>
                                    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5 text-center" id="staticBackdropLabel1">Vicks Vaporub</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6'>
                                                            <h5>Vicks Vaporub 25ml Relief From Cold Cough Headache And Body Pain</h5>
                                                            <h6 className="ms-3 "><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>85</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>99</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img12} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/signup" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img13} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body">
                                    <button className=" fs-5  categoryProduct  btn  fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" >Himalaya Baby Powder</button>
                                    <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel2">Himalaya Baby Powder</h1>

                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6 p-5'>
                                                            <h5>Himalaya Baby Powder Bottle Of 400 G</h5>
                                                            <h6 className="ms-3 mt-4"><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>225</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>250</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img13} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/signup" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img14} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <button className=" mt-3  categoryProduct  btn fs-5 fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" >Vicks Inhaler</button>
                                    <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel3" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel3">Vicks Inhaler</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6 p-4'>
                                                            <h5>Vicks Inhaler Keychain Pack Of 1</h5>
                                                            <h6 className="ms-3 mt-4"><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>62</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>75</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img14} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/signup" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img15} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <button className="  categoryProduct  btn fs-5 fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop4" >Optruma Eye Drops</button>
                                    <div className="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel4" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel4">Optruma Eye Drops</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6 p-4'>
                                                            <h5>Optruma Eye Drops, 10 ml</h5>
                                                            <h6 className="ms-3 mt-4"><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>118</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>225</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img15} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/signup" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img16} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <button className="  categoryProduct  btn fs-5 fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop5" >Himalaya Neem Face Wash</button>
                                    <div className="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel5" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel5">Himalaya Neem Face Wash</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6 p-4'>
                                                            <h5>Himalaya Purifying Neem Face Wash 150ml</h5>
                                                            <h6 className="ms-3 mt-4"><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>180</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>199</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img16} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/signup" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" my-3 mx-2 border CategoryProductCard">
                                <img src={img17} className="card-img-top category-Product-img" alt="..." />
                                <div className="card-body text-center">
                                    <button className="categoryProduct  btn fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop6" >Blood Glucose Monitoring System</button>
                                    <div className="modal fade" id="staticBackdrop6" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel6" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="staticBackdropLabel6">Blood Glucose Monitoring System</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className='d-flex justify-content-center row'>
                                                        <div className='col-6'>
                                                            <h5>Blood Glucose Monitoring System APG01 with 25 Test Strips, 1 kit</h5>
                                                            <h6 className="ms-3 mt-4"><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>499</span><span className="text-decoration-line-through fw-lighter "><i className="bi bi-currency-rupee fw-lighter"></i>615</span></h6>
                                                        </div>
                                                        <div className='col-6'>
                                                            <img src={img17} className="card-img-top category-Product-img" alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" data-bs-dismiss="modal">
                                                    <Link to="/signup" target="_blank" type="button" className='btn btn-primary' style={{ textDecoration: "none" }}>Add to cart<i className="bi bi-cart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* Offers lab test */}
                < section >
                    <div className="container mt-4">
                        <div className="mt-5 mb-4 text-center">
                            <h3 className='text-success'>Booked Lab Tests <i className="bi bi-clipboard2-pulse-fill"></i></h3>
                        </div>
                        <div className="d-flex flex-wrap mb-3  justify-content-evenly">
                            <div className=" border border-1 border-dark rounded-4 bg-light my-3" style={{ height: "270px", width: "400px" }}>
                                <a href="#" style={{ textDecoration: "none" }}><h4 className="my-3 text-center text-dark">Full Body Health Checkup</h4></a>
                                <div className=" d-flex justify-content-evenly">

                                    <div className="ps-3">
                                        <p>It covers the Health Test like Heart, Kidney Function Test, Liver Function Test.</p>
                                        <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span className="text-decoration-line-through fw-lighter ">999</span><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                                    </div>
                                    <div className="pe-2">
                                        <img src={img18} height="160px" width="150px" className="rounded-4" alt="..." />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <a href='/signup' target="_blank"><button className='btn btn-outline-primary'>Book Now</button></a>
                                </div>
                            </div>

                            <div className=" border border-1 border-dark rounded-4 bg-light my-3" style={{ height: "270px", width: "400px" }}>
                                <a href="#" style={{ textDecoration: "none" }}><h4 className="my-3 text-center text-dark">Kids Health Checkup</h4></a>
                                <div className=" d-flex justify-content-evenly">

                                    <div className="ps-3">
                                        <p>Check your child's blood pressure, vision, hearing, weight and height, calculate body mass index (BMI) </p>
                                        <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span className="text-decoration-line-through fw-lighter ">999</span><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                                    </div>
                                    <div className="pe-2">
                                        <img src={img19} height="160px" width="150px" className="rounded-4" alt="..." />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <a href='/signup' target="_blank"><button className='btn btn-outline-primary'>Book Now</button></a>
                                </div>
                            </div>

                            <div className=" border border-1 border-dark rounded-4 bg-light my-3" style={{ height: "270px", width: "400px" }}>
                                <a href="#" style={{ textDecoration: "none" }}><h4 className="my-3 text-center text-dark">Diabetes Checkup</h4></a>
                                <div className=" d-flex justify-content-evenly">

                                    <div className="ps-3">
                                        <p>Checks your average blood sugar levels over the past 2 or 3 months and how close they are to normal.</p>
                                        <h6 className="ms-3 "><i className="bi bi-currency-rupee fw-lighter"></i><span className="text-decoration-line-through fw-lighter ">999</span><span className="ms-3 fw-bold fs-5"><i className="bi bi-currency-rupee"></i>750</span></h6>
                                    </div>
                                    <div className="pe-2">
                                        <img src={img20} height="160px" width="150px" className="rounded-4" alt="..." />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <a href='/signup' target="_blank"><button className='btn btn-outline-primary'>Book Now</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/*Online Payment */}
                < section >
                    <div className="container">
                        <h3 className="mt-5 text-center text-success"><i className="bi bi-currency-rupee"></i>Payment Available With...</h3>

                        <div className="d-flex mx-auto flex-wrap pb-5 justify-content-evenly">
                            <div className="mx-3 mt-3 border text-center payCard paymentCard">
                                <img src={img21} className="my-3" alt="Google py img" />
                                <a href="#" target="_blank" style={{ textDecoration: "none" }}>
                                    <h5 className="text-center text-dark mb-3 ">Google Pay </h5>
                                </a>
                            </div>
                            <div className="mx-3 mt-3 border text-center payCard paymentCard">
                                <img src={img22} className="my-3" alt="Phonepay img" />
                                <a href="#" target="_blank" style={{ textDecoration: "none" }}>
                                    <h5 className="text-center text-dark mb-3 ">Phone Pay </h5>
                                </a>
                            </div>
                            <div className="mx-3 mt-3 border text-center payCard paymentCard">
                                <img src={img23} className="my-3" alt="Paytm img" />
                                <a href="#" target="_blank" style={{ textDecoration: "none" }}>
                                    <h5 className="text-center text-dark mb-3 ">Paytm Karo</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </section >
            </section >

            {/* About page area--------------------------------------------------------------------------------------------------------- */}
            < section id="about" style={{ backgroundColor: "gainsboro" }}>

                <section>
                    <div className="container-fluid p-3 my- text-center">
                        <h3 className=" p-3 my-2">Know About Us!</h3>
                    </div>
                    <div className="container mb-4" style={{ position:'relative', 
                        height: "450px", borderRadius: "10px", backgroundImage: `url(${aboutbg})`, backgroundSize: "100% 100%", backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <div className="about-img1-bg-color" style={{position:"absolute"}}>
                            <div className="text-white text-center mx-auto fs-5">
                                <p className="fs-4 font-monospace">"Good health is not something we can buy.<br /> However, it can be
                                    an
                                    extremely valuable savings account."<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container d-flex my-4" id="aboutus-bg-img2" >
                        <div className="p-5" id='AboutParagraph' >
                            <h3 className='text-center'>"A pharmacy that believes in making families"</h3>
                            <p className='text-center ' >
                                As a pharmacist our team promotes the good of every patient in a caring, compassionate, and confidential manner. We places concern for the well-being of the patient at the center of professional practice. In doing so, we considers needs stated by the patient as well as those defined by health science. We all are dedicated to protecting the dignity of the patient. With a caring attitude and a compassionate spirit, our team focuses on serving the patient in a private and confidential manner.
                                <br /><span className='fw-semibold'><i>Our mission: To help you and your family <br /> reach your health goals</i> </span>
                            </p>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="container mt-2 pb-5">
                        <h3 className="fw-bold ps-5 pt-4 ">MEET OUR TEAM <i className="bi bi-people fs-2"></i></h3>
                        <div className="d-flex flex-wrap justify-content-evenly ">
                            <div className="border my-3 team" style={{ height: "300px", width: "250px" }}>
                                <img src={teamM1} style={{ height: "100%", width: "100%" }} />
                                <div className="p-2 text-center">
                                    <h5 className="fw-bold">Alexa Heal</h5>
                                </div>
                            </div>

                            <div className="border my-3 team" style={{ height: "300px", width: "250px" }}>
                                <img src={teamM2} style={{ height: "100%", width: "100%" }} />
                                <div className="p-2 text-center">
                                    <h5 className="fw-bold">Marry Gold</h5>
                                </div>
                            </div>
                            <div className="border my-3 team" style={{ height: "300px", width: "250px" }}>
                                <img src={teamM3} style={{ height: "100%", width: "100%" }} />
                                <div className="p-2 text-center">
                                    <h5 className="fw-bold">John Xender</h5>
                                </div>
                            </div>
                            <div className="border my-3 team" style={{ height: "300px", width: "250px" }}>
                                <img src={teamM4} style={{ height: "100%", width: "100%" }} />
                                <div className="p-2 text-center">
                                    <h5 className="fw-bold">Nikolas Pooran</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section >

            {/* Contactus page area-------------------------------------------------------------------------------------------------------- */}
            < section id="contactus" >
                <div className="container-fluid py-4 " style={{
                    borderRadius: "10px", backgroundImage: `url(${contactusbg})`, backgroundSize: "100% 100%", backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className="p-1 mt-4 contactus-heading">
                        <h2 className="" >Contact Us <i className="bi bi-headset"></i> </h2>
                    </div>
                    <hr className="hr-line" style={{ }} />
                    <div className="container p-4 my-3 "
                        style={{  height: "", borderRadius: "10px" }}>
                        <div className="d-flex row justify-content-evenly ">
                            <div className=" mt-4 col-lg-5 col-sm-12 col-md-12 ps-5">
                                <div className="">
                                    <h4 className='text-start'><img src={"https://img.icons8.com/fluency/48/000000/address.png"} /> Address</h4>
                                    <p className="contact-link">512,oldmadrasrdblr-16, Doorvaninagar<br />
                                        Bangalore, Karnataka, 56001628514152
                                    </p>
                                </div>
                                <div className="contact-details">
                                    <h4 className='text-start'><img src={"https://img.icons8.com/fluency/48/000000/apple-mail.png"} /> Email</h4>
                                    <a className=" contact-link text-black" href="mailto:hello@gmail.com">helloworld@gmail.com
                                    </a>
                                </div>
                                <div className="contact-details mt-4">
                                    <h4 className='text-start '><img src={"https://img.icons8.com/fluency/48/000000/phone-office.png"} /> Phone</h4>
                                    <a className="contact-link  text-black" href="tel:+91-1234567890">1234567890
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12 p-3" >
                                <h4> Send Message</h4>
                                <form className="col-lg-6 col-sm-12 col-md-12" style={{}}>
                                    <input type="name" className="form-control mt-4 input-box" placeholder="Full Name" /><br />
                                    <input type="email" className="form-control input-box" placeholder="Email" /><br />
                                    <label for="text" className="form-label">Type your Message...</label>
                                    <textarea className="form-control input-box" rows="2" placeholder="Text"></textarea><br />
                                    <button type="button" className="btn btn-info contactus-btn" id="text"> <a
                                        href="#" style={{ textDecoration: "none", color: "white" }}>Send</a></button>
                                    <button type="button" className="ms-5 btn btn-info contactus-cancel-btn" id="text"><a
                                        href="#" style={{ textDecoration: "none", color: "white" }}>Cancel</a></button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section >

            {/* Footer part -------------------------------------------------------------------------------------------*/}
            < footer className="text-white " style={{ backgroundColor: "rgb(46, 157, 176)" }}>
                <div className="container">
                    <div className="container d-flex flex-wrap justify-content-evenly">
                        <div className="footer-style mt-3">
                            <a href="#"><img src={footerlogo} style={{ height: "180px", width: "180px" }}
                                className="footer-img" /></a>
                        </div>
                        <div style={{ marginTop: "50px" }}>
                            <ul style={{ listStyleType: "none" }}>
                                <h4 className="mb-4">Quick Contact</h4>
                                <li><span className="fs-5"><i className="bi bi-telephone"></i> -1234567890</span></li>
                                <li><span className="fs-5"><i className="bi bi-envelope"></i> -helloworld@gmail.com</span></li>
                                <li><span className="fs-5"><i className="bi bi-house"></i> -Bangalore, Karnataka</span></li>
                            </ul>
                        </div>
                        <div className="footer-style" style={{ marginTop: "50px" }}>
                            <ul style={{ listStyleType: "none" }}>
                                <h4 className="mb-4">Find us on....</h4>
                                <li><a href="https://www.flipkart.com" target="_blank" className="m-3 text-white fs-5"
                                    style={{ textDecoration: "none" }}>
                                    <i className="bi bi-cart"></i> Flipkart
                                </a></li>
                                <li> <a href="https://www.amazon.com" target="_blank" style={{ textDecoration: "none" }}
                                    className="m-3 text-white fs-5">
                                    <i className="fa-brands fa-amazon"></i> Amazon</a></li>
                                <li><a href="https://www.twitter.com" target="_blank" style={{ textDecoration: "none" }}
                                    className="m-3 text-white fs-5">
                                    <i className="fa-brands fa-square-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.Facebook.com" target="_blank" style={{ textDecoration: "none" }}
                                    className="m-3 text-white fs-5">
                                    <i className="bi bi-facebook"></i> Facebook</a></li>
                            </ul>
                        </div>
                        <div style={{ marginTop: "50px" }}>
                            <ul style={{ listStyleType: "none" }}>
                                <h4 className="mb-4">Go to...</h4>
                                <li><a className="fs-5 text-white" href="#home" style={{ textDecoration: "none" }}><i
                                    className="bi bi-house"></i> Home</a></li>
                                <li><a className="fs-5 text-white" href="#about" style={{ textDecoration: "none" }}><i
                                    className="bi bi-people fs-4"></i> About</a></li>
                                <li><a className="fs-5 text-white" href="#contactus" style={{ textDecoration: "none" }}><i
                                    className="bi bi-envelope"></i> ContactUs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ paddingBottom: "10px" }}>
                        <hr>
                        </hr>
                        <p style={{ fontSize: "20px", textAlign: "center" }} className="font-monospace "><i><b>" We have the Pharmacists
                            you can count on. Our pharmacist will make sure your most valuable health assest
                            thrives."</b></i></p>
                    </div>
                </div>
            </footer >

        </div >
    );
}

export default Home;
