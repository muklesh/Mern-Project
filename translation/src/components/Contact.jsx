import React from 'react';
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

export default function Contact() {

    

    const [msg, setMsg] = useState({
        name : "",
        email : "",
        phone : "",
        address : "",
        message : ""
    });

     //Handle Inputs
     const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({...msg, [name]:value});
    }

     //Handle Submit
     const handleSubmit = async (event)=> {
        event.preventDefault();
        //Object Destructuring
        // Store Onject Data into Varriables
        const {name,email,address,phone,message} = msg;
        try {
            //It is submitted on port 300 by default
            //which is Front End but we need to
            //Submit it on Backend which is on 
            // Port 3001. So we need Proxy.
            const res = await fetch('/message', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name,email,address,phone,message
                })
            })
            
            if(res.status === 400 || !res){
                window.alert("Message not Sent. Try Again!...")
            }else{
                window.alert("Message Sent.");
                setMsg({
                    name : "",
        email : "",
        phone : "",
        address : "",
        message : ""
                })
            }
        }catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <section id="contact">
                <div className="contianer">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">Have Some <b>Questions</b></h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/contact.jpg" alt="contact" className='w-75' />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Full Name :</label>
                                    <input type="text" name='name' value={msg.name} onChange={handleChange} class="form-control" id="exampleInputPassword1" placeholder='john kumar' />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address :</label>
                                    <input type="email" name='email' value={msg.email} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='name@gmail.com'/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Phone :</label>
                                    <input type="text" name='phone' value={msg.phone} onChange={handleChange} class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Address :</label>
                                    <input type="text" name='address' value={msg.address} onChange={handleChange} class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Your Message :</label>
                                   <textarea name='message' value={msg.message} onChange={handleChange} id="exampleFormControlTextarea" cols="30" rows="5" className="form-control" placeholder='Write here your query!'></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary rounded-pill px-4"><i className='fa fa-paper-plane ms-2'></i> Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
