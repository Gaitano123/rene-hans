import { useState } from 'react'
import { NavLink } from "react-router-dom";
import logo from './justice/IMG-20240508-WA0009-removebg-preview.png'

function Footer(){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const [ formInputs, setFormInputs ] = useState({
        email: '',
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setFormInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleClick(e){
        e.preventDefault();

        fetch('http://localhost:3000/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formInputs.email
            })
        });

        setFormInputs({
            email: '',
        })
    }

    return(
        <div className="footer">
            <div className="foot-div1">
                <div className="sctn1">
                    <div className="logo-sctn">
                        <img src={logo} alt='logo'/>
                        {/* <h2>rene & hans advocates llp</h2> */}
                    </div>
                    <div>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className="sctn2">
                    <div className="footlinks">
                        <h3>quick links</h3>
                        <div>
                            <ul>
                                <li><NavLink className='navlink2' exact to='/' onClick={scrollToTop}>home</NavLink></li>
                                <li><NavLink className='navlink2' to='/service' onClick={scrollToTop}>service</NavLink></li>
                                <li><NavLink className='navlink2' to='/about' onClick={scrollToTop}>about</NavLink></li>
                                <li><NavLink className='navlink2' to='/gallery' onClick={scrollToTop}>gallery</NavLink></li>
                            </ul>
                            <ul>
                                <li><NavLink className='navlink2' to='/blog' onClick={scrollToTop}>blog</NavLink></li>
                                <li><NavLink className='navlink2' to='/reviews' onClick={scrollToTop}>reviews</NavLink></li>
                                <li><NavLink className='navlink2' to='/appointment' onClick={scrollToTop}>make appointment</NavLink></li>
                                <li><NavLink className='navlink2' to='/get-in-touch' onClick={scrollToTop}>get in touch</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footinfo">
                        <p><i class="fa-solid fa-phone"></i> <span> +254716378184/+254700704724</span></p>
                        <p><a href='mailto: info@rhadvocates.co.ke' target='blank' ><i class="fa-solid fa-envelope"></i> <span> info@rhadvocates.co.ke</span></a></p>
                        <a href='https://www.google.com/maps/place/Sanlam+House/@-1.2843857,36.8195896,17z/data=!3m1!4b1!4m6!3m5!1s0x182f10d65f5df39d:0x93c7656f3e344c6e!8m2!3d-1.2843857!4d36.8221645!16s%2Fg%2F1v_swq0g?authuser=0&entry=ttu' target='blank'><i class="fa-solid fa-location-dot"></i> <span> Salam House, Kenyatta Avenue, 4th Floor</span></a>
                    </div>
                </div>
                <div className="newsletter">
                    <h1>Subscribe to our newsletter</h1>
                    <form>
                        <div class="input-group mb-3">
                          <input name='email' onChange={handleChange} value={formInputs.email} type="text" class="form-control" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                          <button onClick={handleClick} class="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="foot-div2">
                <p>Copyright © 2024 rene & hans advocates llp</p>
            </div>
        </div>
    )
}

export default Footer;
