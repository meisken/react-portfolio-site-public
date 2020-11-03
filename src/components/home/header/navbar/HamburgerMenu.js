import React from 'react'

export default function HamburgerButton({active,handleToggle}) {
    return (
        <div className={"hamburger-button " + (active ? "active" : "")} onClick={handleToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export {HamburgerButton}