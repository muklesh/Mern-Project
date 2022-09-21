
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import { useState } from 'react';

import { useEffect } from 'react';

function App() {

  // Check If user is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try{
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth(true)
      }
    } catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/login" element={<Login />} auth={auth1} />
      <Route exact path="/register" element={<Register />} auth={auth1} />
      <Route exact path="/logout" element={<Logout />} auth={auth} />
      <Route exact path="/dashboard" element={<Dashboard />} auth={auth} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
