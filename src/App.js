// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light');

  const handleMode = ()=>{
    
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" link1="HomeT" handleMode={handleMode} modeNav={mode}/>
    
    <TextForm heading="Enter Your Text" />
    <div className="container my-3">

    {/* <About/> */}


    </div>
    
    

    </>
  );
}

export default App;
