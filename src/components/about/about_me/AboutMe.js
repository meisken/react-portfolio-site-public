import React from 'react'
import Title from '../UnderlineTitle'
import InvertedButton from '../../global/InvertedButton'
import ScrollingAnimationTrigger from '../../on_scrolling_animation/ScrollingAnimationTrigger'
export default function AboutMe() {
    return (
        <div className="about-me">
            
            <Title>About me</Title>

            <ScrollingAnimationTrigger beforeActivateClassName="about-hero-scrolling-animation">
                <div className="hero">
                    
                    <h3 className="SegoeUI-font semibold">I'm Ken Tang<br/>I'm Web Developer<br/>I can build you a wonderful website</h3>
                    <p className="SegoeUI-font light">I love using technology and building beautiful things.</p>
                    <a href="https://www.upwork.com/freelancers/~01698d1c0db877b32d"><InvertedButton>download my resume</InvertedButton></a>
                    
                </div>
            </ScrollingAnimationTrigger>


        </div>
    )
}
