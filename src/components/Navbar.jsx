import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import logo from './justice/IMG-20240508-WA0009-removebg-preview.png'

function Navbar(){

    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className='nav1' onClick={() => {navigate("/"); scrollToTop();}} onDoubleClick={() => {navigate("/data")}}>
                <img className={`logo ${isScrolled ? 'show-bg' : ''}`} src={logo} alt='logo' />
                <p>rene & hans advocates llp</p>
            </div>
            <ul className="nav2">
                <li><NavLink onClick={scrollToTop} className='navlink' exact to='/'>home</NavLink></li>
                <li><NavLink onClick={scrollToTop} className='navlink' to='/service'>service</NavLink></li>
                <li><NavLink onClick={scrollToTop} className='navlink' to='/about'>about</NavLink></li>
                <li><NavLink onClick={scrollToTop} className='navlink' to='/gallery'>gallery</NavLink></li>
                <li><NavLink onClick={scrollToTop} className='navlink' to='/blog'>blog</NavLink></li>
                <li><NavLink onClick={scrollToTop} className='navlink' to='/reviews'>reviews</NavLink></li>
            </ul>
            <button className="navbutt" onClick={() => {navigate("/get-in-touch"); scrollToTop();}}>
                Get in touch
            </button>
            <i className="fa-solid fa-bars menu-icon" onClick={() => {navigate("/menu"); scrollToTop();}}></i>        
        </div>
    )
}

export default Navbar