import { useNavigate } from "react-router-dom";

import img1 from './justice/honesty.png';
import img2 from './justice/gavel.png';
import img3 from './justice/social-justice.png';
import image from './justice/360_F_516209984_APT701DWSDCUPzErByEByUrqEjHwRYCX.jpg';
import process from './justice/process.png'
import staff1 from './justice/pexels-august-de-richelieu-4427622.jpg'


function Home(){

    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return(
        <div className='lnd1'>
            <div className='lnd2'>
                <div className='lnd-sctn'>
                    <div className='landing'>
                        <p>begin your journey </p>
                        <span>to justice</span>
                    </div>
                </div>
                <div className='lnd-prt'>
                    <div className='lnd-prt2'>
                        <img src={img1} alt='image 1' />
                        <p>building trust</p>
                    </div>
                    <div className='lnd-prt3'>
                        <img src={img2} alt='image 2' />
                        <p>delivering justice</p>
                    </div>
                    <div className='lnd-prt2'>
                        <img src={img3} alt='image 3' />
                        <p>powerfully representing you</p>
                    </div>
                </div>
            </div>
            <div className="home2_1">
                <h3>Empowering clients: From Strategic Vision to Effective Implementation</h3>
                <div className="home2-2">
                    <div className="home2-3">
                        <div>
                            <h4>Perspective Shift</h4>
                            <p>Encouraging clients to adopt innovative viewpoints for strategic advantage</p>
                        </div>
                        <div>
                            <h4>Empowering Success</h4>
                            <p>Providing clients with the autonomy and support needed for achieving goals</p>
                        </div>
                        <div>
                            <h4>Business-Centric Solutions</h4>
                            <p>Tailoring strategies and tools specifically to address the challenges and goals of businesses</p>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="serv1">
                <div className="heading">
                    <h3>Tailored legal solutions for your peace of mind</h3>
                </div>
                <div className="serv2">
                <div>
                    <i class="fa-solid fa-gavel"></i>
                    <p>Litigation and Dispute Resolution</p>
                </div>
                <div>
                    <i class="fa-solid fa-handshake"></i>
                    <p>Corporate and Commercial Law</p>
                </div>
                <div>
                    <i class="fa-solid fa-house"></i>
                    <p>Real Estate Law</p>
                </div>
                <div>
                    <i class="fa-solid fa-lightbulb"></i>
                    <p>Intellectual Property Law</p>
                </div>
                <div>
                    <i class="fa-solid fa-heart"></i>
                    <p>Family Law</p>
                </div>
                <div>
                    <i class="fa-solid fa-users"></i>
                    <p>Employment Law</p>
                </div>
                <div>
                    <i class="fa-solid fa-key"></i>
                    <p>Estate Planning and Probate</p>
                </div>
                <div>
                    <i class="fa-solid fa-passport"></i>
                    <p>Immigration Law</p>
                </div>
                </div>
            </div>
            <div className='landing2'>
                <div className='process'>
                    <i class="fa-solid fa-stairs"></i>
                </div>
                <div className="landing2_2">
                    <p>take the first step</p>
                    <p>Your journey towards justice starts with one decisive action.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
