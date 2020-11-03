import React from 'react'
import Header from './header/Header'
import Headline from './headline/Headline'

export default function Home() {

    return (
        <div className="home">
            <div className="hero-wrapper">
                <Header></Header>
                <div className="hero-body">
                    <Headline></Headline>
                </div>
            </div>
            
            <video className="hero-background" autoPlay muted loop playsInline src={require("../../video/hero_background.mov")}></video>
        </div>
    )
}
