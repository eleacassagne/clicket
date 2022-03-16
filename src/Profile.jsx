import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
//import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Project from './components/Project'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'



export const Profile = (props) => {
  return (
    <div className="App">
      <Header />
      <hr />
      {/* <Navbar />
      <br /> */}
      <Banner /> 
      <br />
      <About />
      <br />
      <hr />
      {/* <h1 className="skillheader">My SKills</h1>
      <hr /> */}
      {/* <Project />
      <hr /> */}
      {/* <Portfolio />
      <hr /> */}
      {/* <h1 id="contactnav" className="contact">Contact Information</h1>
      <hr />
      <Contact /> */}

    </div>
  );
};

