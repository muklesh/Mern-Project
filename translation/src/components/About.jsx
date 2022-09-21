import React from 'react'

export default function About() {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about.jpg" alt="about" className='w-75 mt-2' />
                    </div>
                    <div className="col-md-5">
                    <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are?</h1>
                        <hr className='w-50' />
                        <p className="lead mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                             sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                             software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                        <button className="btn btn-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
