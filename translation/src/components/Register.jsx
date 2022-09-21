import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username : "",
        email : "",
        phone : "",
        password : ""
    });

    //Handle Inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value});
    }

    //Handle Submit
    const handleSubmit = async (event)=> {
        event.preventDefault();
        //Object Destructuring
        // Store Onject Data into Varriables
        const {username,email,password,phone} = user;
        try {
            //It is submitted on port 300 by default
            //which is Front End but we need to
            //Submit it on Backend which is on 
            // Port 3001. So we need Proxy.
            const res = await fetch('/register', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    username,email,password,phone
                })
            })
            
            if(res.status === 400 || !res){
                window.alert("Already Used Details")
            }else{
                window.alert("Registered Successfully");
                navigate.push('/login')
            }
        }catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder">Hello Dear,</h1>
                        <p className="lead">Enter Your Details to Register</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                    </div>
                    <div className="col-md-6 m-2 py-5">
                        <h1 className="display-6 fw-bolder mb-5">Register</h1>
                        <form onSubmit={handleSubmit} method="POST">
                        <div class="mb-3">
                                <label for="name" class="form-label">Username</label>
                                <input type="text" name='username' value={user.username} onChange = {handleInput} class="form-control" placeholder="user name" aria-label="First name"/>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Mobile No.</label>
                                <input type="text" name='phone' value={user.phone} onChange = {handleInput} class="form-control" placeholder="Mobile Number" aria-label="mobile"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" name='email' value={user.email} onChange = {handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='name@gmail.com'/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" name='password' value={user.password} onChange = {handleInput} class="form-control" id="exampleInputPassword1"/>
                                <div id="emailHelp" class="form-text">We'll never share your also password with anyone else.</div>
                            </div>
                            <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
  </div>
                            <button type="submit" class="btn btn-outline-primary w-50 mt-4 rounded-pill">Register</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}
