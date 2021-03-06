import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'



export default function Navbar(props) {

    

    
    return (
        <>

            <nav className= {` navbar navbar-expand-lg navbar-${props.modeNav} bg-${props.modeNav}` }>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.link1}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" href="/">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className={`form-check form-switch text-${props.modeNav === 'light' ? 'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.handleMode} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
                
            </nav>








        </>
    )
}


