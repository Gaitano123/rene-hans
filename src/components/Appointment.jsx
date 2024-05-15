import { useState } from 'react'

function Appointment(){

    const [ formInputs, setFormInputs ] = useState({
        firstname: "",
        lastname: '',
        phonenumber: '',
        date: '',
        reason: "",
        secondname: '',
        email: '',
        idorpassport: '',
        time: "",
        service: '',
        additional: ''
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

        fetch('http://localhost:3000/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "firstname": formInputs.firstname,
                "lastname": formInputs.lastname,
                "phonenumber": formInputs.phonenumber,
                "date": formInputs.date,
                "reason": formInputs.reason,
                "secondname": formInputs.secondname,
                "email": formInputs.email,
                "idorpassport": formInputs.idorpassport,
                "time": formInputs.time,
                "service": formInputs.service,  
                "additional": formInputs.additional              
            })
        })
        
        setFormInputs({
            firstname: "",
            lastname: '',
            phonenumber: '',
            date: '',
            reason: "",
            secondname: '',
            email: '',
            idorpassport: '',
            time: "",
            service: '',
            additional: ''
        })
    }

    return(
        <div className="apnt">
            <div className="apnt1">
                <h2>BOOK APPOINTMENT</h2>
            </div>
            <form className="apnt2">
                <div className="aptn2_5">
                    <div className="aptn3">
                        <label>FIRST NAME
                            <input name='firstname' onChange={handleChange} value={formInputs.firstname} type="text" />
                        </label>
                        <label>LAST NAME
                                <input name='lastname' onChange={handleChange} value={formInputs.lastname} type="text" />
                        </label>
                        <label>PHONE NUMBER
                            <input name='phonenumber' onChange={handleChange} value={formInputs.phonenumber} type="number" />
                        </label>
                        <label>DATE
                                <input name='date' onChange={handleChange} value={formInputs.date} type="date" />
                        </label>
                        <label>REASON FOR APPOINTMENT
                                <input name='reason' onChange={handleChange} value={formInputs.reason} type="text" />
                        </label>
                    </div>
                    <div  className="aptn3">
                        <label>SECOND NAME
                            <input name='secondname' onChange={handleChange} value={formInputs.secondname} type="text" />
                        </label>
                        <label>EMAIL ADDRESS
                                <input name='email' onChange={handleChange} value={formInputs.email} type="email" />
                        </label>
                        <label>ID NO/PASSPORT NUMBER
                            <input name='idorpassport' onChange={handleChange} value={formInputs.idorpassport} type="number" />
                        </label>
                        <label>TIME
                                <input name='time' onChange={handleChange} value={formInputs.time} type="time" />
                        </label>
                        <label>SERVICE NEEDED
                                <input name='service' onChange={handleChange} value={formInputs.service} type="text" />
                        </label>
                    </div>
                </div>
                <label>ADDITIONAL INFORMATION
                    <textarea name='additional' onChange={handleChange} value={formInputs.additional} type="text" />
                </label>
                <div className="app-btn">
                    <button onClick={handleClick} type="submit">BOOK NOW</button>
                </div>
            </form>
        </div>
    )
}

export default Appointment
