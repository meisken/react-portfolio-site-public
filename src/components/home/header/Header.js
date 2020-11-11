import React from 'react'
import Navbar from "./navbar/Navbar"
import ScrollingAnimationTrigger from '../../on_scrolling_animation/ScrollingAnimationTrigger'
export default function Header() {
    return (
        <ScrollingAnimationTrigger beforeActivateClassName="header-scrolling-animation">
            <div className="header">
                <h5 className="SegoeUI-font bold">LOGO</h5>
                <Navbar></Navbar>
            </div>
        </ScrollingAnimationTrigger>
    )
}
