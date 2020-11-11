import React,{ useState} from 'react'
import {SpinnerLoader} from './loading/Loader'
import emailjs from 'emailjs-com'
export default function ContactForm() {

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    });
 
    const [loading,setLoading] = useState(false);
    const [statusMessage,setStatusMessage] =  useState('');
    const [status,setStatus] = useState(false);

    const handleInput = (e) => {
   
        let newFormData = formData;
        newFormData[e.target.id] = e.target.value;
   
        setFormData({...newFormData})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatusMessage('');
        setLoading(true);
        setFormData({
            name:'',
            email:'',
            message:''
        });
        emailjs.send('Send_Me_Message','template_hcpyx5k',formData,'user_QT3ae5FFgatOVsHclrYV0').then(() => {
         
            setStatus(true);
            setStatusMessage('Sended message successful');
        }).catch((err) => {
            setStatus(false);
            setStatusMessage(err);

        }).finally(() => {
            
            setLoading(false);

      
        })
    
    }
    return (
        <div className="contact-form">
            <h5 className="SegoeUI-font semibold">Send me a Message</h5>

            <form autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <input type="text" id="name" onChange={handleInput} value={formData.name} required/>
                    <label htmlFor="Name" className={ formData.name !== '' ?"extended" : ""}><h6>Your Name</h6></label>
                    <div className="input_underline"></div>
                </div>
                <div>
                    <input type="email" id="email" onChange={handleInput} value={formData.email} required/>
                    <label htmlFor="Email" className={ formData.email !== '' ?"extended" : ""}><h6>Email</h6></label>
                    <div className="input_underline"></div>
                </div>
                <div>
                    <input type="Message" id="message" onChange={handleInput} value={formData.message} required/>
                    <label htmlFor="Message" className={ formData.message !== '' ?"extended" : ""}><h6>Message</h6></label>
                    <div className="input_underline"></div>
                </div>
                {statusMessage !== '' ? (<div className={"status-message " + (status?"success":"fail")}>{statusMessage}</div>) : null}
                <button disabled={loading}>{loading ? <SpinnerLoader></SpinnerLoader> : "Send"}</button>
            </form>
            
        </div>
    )
}
