import React,{useState} from 'react'
import { useEffect } from 'react';

export default function ContactForm() {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    });
 
    useEffect(() => {
   
    },[formData])
    const handleInput = (e) => {
   
        let newFormData = formData;
        newFormData[e.target.id] = e.target.value;
   
        setFormData({...newFormData})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('a');
    }
    return (
        <div className="contact-form">
            <h5 className="SegoeUI-font semibold">Send me a Message</h5>

            <form autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <input type="text" id="name" onInput={handleInput} />
                    <label htmlFor="Name" className={ formData.name !== '' ?"extended" : ""}><h6>Your Name</h6></label>
                    <div className="input_underline"></div>
                </div>
                <div>
                    <input type="email" id="email" onInput={handleInput} />
                    <label htmlFor="Email" className={ formData.email !== '' ?"extended" : ""}><h6>Email</h6></label>
                    <div className="input_underline"></div>
                </div>
                <div>
                    <input type="Message" id="message" onInput={handleInput} />
                    <label htmlFor="Message" className={ formData.message !== '' ?"extended" : ""}><h6>Message</h6></label>
                    <div className="input_underline"></div>
                </div>

                <button>Send</button>
            </form>
        </div>
    )
}
