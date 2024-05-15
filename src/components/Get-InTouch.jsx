import React from 'react';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8158983293274!2d36.81958957415255!3d-1.2843856987034028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d65f5df39d%3A0x93c7656f3e344c6e!2sSanlam%20House!5e0!3m2!1sen!2ske!4v1715068534737!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

function GetInTouch() {
    const iframeHtml = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8158983293274!2d36.81958957415255!3d-1.2843856987034028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d65f5df39d%3A0x93c7656f3e344c6e!2sSanlam%20House!5e0!3m2!1sen!2ske!4v1715068534737!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

    const notify = () => toast("Wow so easy!");

    const [ formInputs, setFormInputs ] = useState({
        fullnames: "",
        email: '',
        phonenumber: '',
        subject: ''
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


        fetch('http://localhost:3000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fullnames": formInputs.fullnames,
                "email": formInputs.email,
                "phonenumber": formInputs.phonenumber,
                "subject": formInputs.subject             
            })
        })

        setFormInputs({
            fullnames: "",
            email: '',
            phonenumber: '',
            subject: ''
        })
    }
    
    return (
        <div className="touch">
            <div className='get-in-touch'>
                <form className="touchfrm">
                    <div>
                        <label>full names</label>
                        <label>email</label>
                        <label>phone number</label>
                        <label>subject</label>

                    </div>
                    <div>
                        <input name='fullnames' onChange={handleChange} value={formInputs.fullnames} type="text" />
                        <input name='email' onChange={handleChange} value={formInputs.email} type="text" />
                        <input name='phonenumber' onChange={handleChange} value={formInputs.phonenumber} type="number" />
                        <textarea name='subject' onChange={handleChange} value={formInputs.subject} type="text" />
                    </div>
                </form>
                <div className="touchbtn">
                    <button onClick={()=> {handleClick; notify}} type="submit">Submit</button>
                </div>
            </div>
            <div className='map' dangerouslySetInnerHTML={{ __html: iframeHtml }} />
        </div>
    );
}

export default GetInTouch;

