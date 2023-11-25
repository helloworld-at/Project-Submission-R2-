import React from 'react';
import './nav.css';
import logo from '../../assets/logo.png';



    const Navbar = () => {
        return (
            <header className='header-inner'>
            <nav className='Navbar'>
                <img src={logo}
                alt="logo" className="logo" />
                <br></br>
            <a href="#Home" className="link">Home</a>
            <a href="#Projects" className="link">About</a>
            <a href="#Skills" className="link">Skills</a>
            <a href="#Projects" className="link">Projects</a>
            </nav>
            </header>
          
          
        )

    }

    export default Navbar;