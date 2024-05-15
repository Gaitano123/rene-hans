import { useEffect, useState } from 'react'

function Data(){

    const [applications, setApplication] = useState([])
    const [contacts, setContact] = useState([])
    const [emails, setEmail] = useState([])

    function fetchApp(){
        fetch('http://localhost:3000/appointment')
        .then((res) => res.json())
        .then((data) => setApplication(data))
    }

    function fetchContact(){
        fetch('http://localhost:3000/contacts')
        .then((res) => res.json())
        .then((data) => setContact(data))
    }

    function fetchEmail(){
        fetch('http://localhost:3000/emails')
        .then((res) => res.json())
        .then((data) => setEmail(data))
    }

    useEffect(() => {
        fetchApp(),
        fetchContact(),
        fetchEmail()
    }, [])

    const application  =  applications.map((application) => (
        <div className='data2' key={application.id}>
            <p><span>firstname: </span>{application.firstname}</p>
            <p><span>secondname: </span>{application.secondname}</p>
            <p><span>lastname: </span>{application.lastname}</p>
            <p><span>phone number: </span>{application.phonenumber}</p>
            <p><span>email: </span>{application.email}</p>
            <p><span>id/passport: </span>{application.idorpassport}</p>
            <p><span>date: </span>{application.date}</p>
            <p><span>time: </span>{application.time}</p>
            <p><span>reason: </span>{application.reason}</p>
            <p><span>service: </span>{application.service}</p>
            <p><span>additional info: </span>{application.additional}</p>
        </div>
    ))

    const contact = contacts.map((contact) => (
        <div className='data2' key={contact.id}>
            <p><span>fullnames: </span>{contact.fullnames}</p>
            <p><span>email: </span>{contact.email}</p>
            <p><span>phone number: </span>{contact.phonenumber}</p>
            <p><span>subject: </span>{contact.subject}</p>
        </div>
    ))

    const email = emails.map((email) => (
        <div className='data2' key={email.id}>
            <p>{email.email}</p>
        </div>
    ))

    return(
        <div className='data1'>
            <div className='data1_1'>
                <h3>appointments</h3>
                <div className='data3'>
                    {application}
                </div>
            </div>
            <div className='data1_1'>
                <h3>get-in touch</h3>
                <div className='data3'>
                    {contact}
                </div>
            </div>
            <div className='data1_1'>
                <h3>newsletter</h3>
                <div className='data3'>
                    {email}
                </div>
            </div>
        </div>
    )
}



export default Data;
