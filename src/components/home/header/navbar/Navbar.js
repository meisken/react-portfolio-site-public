import React, { useState } from 'react'
import HamburgerButton from "./HamburgerMenu"
export default function Navbar() {
    const routes = [{name:"Home",id:"home-page"},{name:"About me",id:"about-page"},{name:"Contact me",id:"contact-page"}];
    const [cursorPos,setCursorPos] = useState({x:0,y:0});
    const [menuActive,setMenuActive] = useState(false);
    function cursorPosition(e){
        const {pageX:x,pageY:y} = e;
        setCursorPos({x,y});

    }
    function shakeAnimation(e){
 
        if(window.matchMedia("(min-width: 768px)").matches){
            const { height ,width } = e.currentTarget.getBoundingClientRect();
            const {offsetLeft:elementX , offsetTop:elementY} = e.currentTarget;
            const amplitude = 2;
            e.currentTarget.style.transform = `translate(${(cursorPos.x - elementX - width/2)/amplitude}px,${(cursorPos.y - elementY - height/2)/amplitude}px)`
     
        }

        if(e.type === 'mouseleave'){
            e.currentTarget.style.transform = ''
        }
    }
    function smoothNavigate(id){
        if(menuActive){
            setMenuActive(active => !active);
        }
        const {offsetTop} = document.getElementById(id);

        window.scroll({
            top:offsetTop,
            behavior: 'smooth'
        });

    }
    return (
        <nav className="navbar">
            <ul onMouseMove={cursorPosition} className={ menuActive ? "opened" : ""}>

                {routes && routes.map((route,index) => {

                    return (<li onMouseMove={shakeAnimation} onMouseLeave={shakeAnimation} key={index} onClick={() =>{smoothNavigate(route.id)}}>{route.name}</li>)
                })}
                <HamburgerButton active={menuActive} handleToggle={() =>{setMenuActive(active => !active)}}></HamburgerButton>

                <div className="cursor" style={{top:cursorPos.y,left:cursorPos.x}}></div>
            </ul>
        
        </nav>

    )
}
