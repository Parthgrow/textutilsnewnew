// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {



  const [mode, setMode] = useState('light');

  const handleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (

    <Router>


      <Navbar title="TextUtils" link1="HomeT" handleMode={handleMode} modeNav={mode} />

      <Routes>

        <Route path="/" element={<TextForm/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    
      {/* < className="container my-3">

       

        


      </div> */}




    </Router>
  );
}

export default App;
