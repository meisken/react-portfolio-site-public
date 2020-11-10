import React from 'react'
import Title from '../UnderlineTitle'
import InvertedButton from '../../global/InvertedButton'
export default function AboutMe() {
    return (
        <div className="about-me">
            
            <Title>About me</Title>

           
            <div className="hero">
                
                <h3 className="SegoeUI-font semibold">I'm Ken Tang<br/>I'm Web Developer<br/>I can build you a wonderful website</h3>
                <p className="SegoeUI-font light">I love using technology and building beautiful things.</p>
                <InvertedButton>download my resume</InvertedButton>
            </div>

        </div>
    )
}
