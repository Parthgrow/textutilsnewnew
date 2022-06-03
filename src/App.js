// import logo from './logo.svg';
import './App.css';
import React from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" link1="HomeT"/>
    
    {/* <TextForm heading="Enter Your Text" /> */}
    <div className="container my-3">

    <About/>


    </div>
    
    

    </>
  );
}

export default App;
