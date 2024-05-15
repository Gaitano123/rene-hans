import React, { useEffect, useState } from 'react';
import staff1 from './justice/pexels-august-de-richelieu-4427622.jpg'
import img1 from './justice/pexels-nika-poznyak-2305919-9685285.jpg'
import img2 from './justice/pexels-1363928-2935910.jpg'
import img3 from './justice/pexels-brett-sayles-1000740.jpg'
import img4 from './justice/pexels-ozer-bey-299515769-14526072.jpg'
import img5 from './justice/pexels-shahadat-hossain-1853045-7573657.jpg'

function About(){

    function CountingNumber({ total }) {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            if (count < total) {
              setCount(count + 1);
            } else {
              clearInterval(interval);
            }
          }, 10);
      
          return () => clearInterval(interval);
        }, [count, total]);
      
        return <h2>{count}</h2>;
    }
    
    return(
        <div className='about1'>
            <div className='about2'>
                <div className='about3'>
                    <img src={img1} alt='image' />
                </div>
                <div className='about4'>
                    <div className='about5'>
                        <CountingNumber total={38} />
                        <hr/>
                        <h3>dedicated lawyers</h3>
                    </div>
                    <div className='about5'>
                        <CountingNumber total={2175} />
                        <hr/>
                        <h3>successful cases</h3>
                    </div>
                    <div className='about5'>
                        <CountingNumber total={957} />
                        <hr/>
                        <h3>satisfied clients</h3>
                    </div>
                    <div className='about5'>
                        <CountingNumber total={809} />
                        <hr/>
                        <h3>personal cases</h3>
                    </div>
                </div>
            </div>
            <div className='about6'>
                <div className='about6_1'>
                    <h3>MEET THE PROFESSIONALS</h3>
                </div>
                <div className='about6_2'>
                    <div>
                        <img src={staff1} alt='member' />
                        <h2>John Doe</h2>
                        <div className='about6_3'>
                            <i className="fa-solid fa-quote-left i1"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <i className="fa-solid fa-quote-right i2"></i>
                        </div>
                    </div>
                    <div>
                        <img src={staff1} alt='member' />
                        <h2>John Doe</h2>
                        <div className='about6_3'>
                            <i className="fa-solid fa-quote-left i1"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <i className="fa-solid fa-quote-right i2"></i>
                        </div>
                    </div>
                    <div>
                        <img src={staff1} alt='member' />
                        <h2>Jane Smith</h2>
                        <div className='about6_3'>
                            <i className="fa-solid fa-quote-left i1"></i>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <i className="fa-solid fa-quote-right i2"></i>
                        </div>
                    </div>
                    <div>
                        <img src={staff1} alt='member' />
                        <h2>Michael Johnson</h2>
                        <div className='about6_3'>
                            <i className="fa-solid fa-quote-left i1"></i>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <i className="fa-solid fa-quote-right i2"></i>
                        </div>
                    </div>
                </div>

            </div>
            <div className='about7'>
                <div className='about8'>
                    <img className='about-image' src={img2} alt='image 2' />
                    <p>
                        At Keystone Law Firm, we are more than just legal practitioners; we are architects of justice, sculpting solutions with precision and dedication. With a relentless pursuit of excellence at our core, we strive to exceed expectations in every case we handle. Our team is comprised of seasoned professionals who bring a wealth of experience and expertise to the table, ensuring that each client receives personalized attention and tailored strategies to address their unique needs.
                    </p>
                </div>
                <div  className='about8 a8'>
                    <img className='about-image' src={img3} alt='image 3' />
                    <p>
                        Founded on principles of trust and integrity, Keystone Law Firm has established a legacy of reliability and accountability in the legal community. We understand the importance of earning and maintaining our clients' trust, which is why transparency and ethical conduct guide every aspect of our practice. Our commitment to integrity extends beyond the courtroom, fostering long-term relationships built on honesty, respect, and mutual understanding.
                    </p>
                </div>
                <div className='about8'>
                    <img className='about-image' src={img4} alt='image 4' />
                    <p>
                        At Keystone Law Firm, our clients are at the heart of everything we do. We recognize that legal matters can be daunting and complex, which is why we prioritize clear communication, compassionate support, and proactive advocacy. From the initial consultation to the resolution of your case, our dedicated team is here to listen, educate, and empower you every step of the way. Your success is our success, and we are fully invested in helping you achieve your legal objectives.
                    </p>
                </div>
                <div className='about8 a8'>
                    <img className='about-image' src={img5} alt='image 5' />
                    <p>
                        With a diverse range of practice areas, Keystone Law Firm offers comprehensive legal solutions to individuals, businesses, and organizations alike. Whether you're navigating a contentious divorce, seeking guidance on business transactions, or defending your rights in a criminal matter, our multidisciplinary approach ensures that you receive strategic counsel tailored to your specific circumstances. From negotiation and mediation to litigation and appeals, we have the skills and resources to handle even the most complex legal challenges.
                    </p>
                </div>
                <div className='about10'>
                    <p>
                        When you choose Keystone Law Firm as your legal partner, you're not just hiring attorneys; you're gaining trusted advisors and dedicated allies committed to your success. We take pride in building lasting relationships with our clients, serving as their advocates and confidants throughout the legal process. With Keystone Law Firm by your side, you can navigate the legal landscape with confidence, knowing that you have a team of experienced professionals fighting for your rights and interests.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
