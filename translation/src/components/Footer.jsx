import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="footer text-white">
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-3">
                            <h4>TRANSLATION</h4>
                        </div>
                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-white">Home</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-white">Services</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-white">Pricing</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-white">FAQ</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-white">Contact Us</a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a to="#" className="nav-link p-0 text-white">About Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 offset-1">
                            <form action="">
                                <h5>Subscribe to our Newsletter</h5>
                                <p>Monthly digest of whats new and exciting form us.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label htmlFor="newletter1" className="visually-hidden">Email address</label>
                                    <input id="newletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary rounded-pill px-4">Subscriber</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                        <p>@ 2022 Neethu Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a href="" className="link-light"><i className='fa fa-facebook fa-2x'></i></a>
                            </li>
                            <li className="ms-3">
                            <a href="" className="link-light"><i className='fa fa-instagram fa-2x'></i></a>
                            </li>
                            <li className="ms-3">
                            <a href="" className="link-light"><i className="fa fa-twitter fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </footer>
    </div>
  )
}
