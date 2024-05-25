import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

function Menu(){

    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const history = useNavigate()

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
        <div className='menu'>
            <i onClick={() => history(-1)} class="fa-solid fa-xmark"></i>
            <div className="nav2_2">
                <NavLink onClick={scrollToTop} className='menulink' exact to='/'>home</NavLink>
                {/* <NavLink onClick={scrollToTop} className='menulink' to='/service'>service</NavLink> */}
                <NavLink onClick={scrollToTop} className='menulink' to='/about'>about</NavLink>
                <NavLink onClick={scrollToTop} className='menulink' to='/gallery'>gallery</NavLink>
                <NavLink onClick={scrollToTop} className='menulink' to='/blog'>blog</NavLink>
                {/* <NavLink onClick={scrollToTop} className='menulink' to='/reviews'>reviews</NavLink> */}
            </div>
            <button className="menu_button" onClick={() => {navigate("/get-in-touch"); scrollToTop();}}>
                Get in touch
            </button>
        </div>
    )
}

export default Menu;
