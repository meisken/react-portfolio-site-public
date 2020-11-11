import React from 'react'
import ContactForm from './contact_form/ContactForm'
import ContactInformation from './contact_information/ContactInformation';
export default function Postcard() {
    return (
        <div className="postcard"  id="contact-page">
            <div className="side-left">
                <header>
                    <h5 className="o-4 SegoeUI-font regular">Just say hi</h5>
                    <h1 className="SegoeUI-font semibold with-underline">Contact me</h1>
                </header>
            
                <ContactForm></ContactForm>
                <img className="background-circuit" src={require("../../../img/contact_bg_circuit.png")}/>
            </div>
            <div className="side-right">
                <ContactInformation></ContactInformation>
            </div>
         
        </div>
    )
}
