import React from 'react'

import AboutMe from './about_me/AboutMe'
import Feature from './feature/Feature'
export default function About() {
    return (
        <div className="about">
            <div className="hero-section">     
                <AboutMe></AboutMe>
            </div>
            <div className="feature-section">
                <Feature></Feature>
            </div>
        </div>
    )
}
