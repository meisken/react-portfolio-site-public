import React from 'react'
import MassiveButton from './button/MassiveButton'
import ScrollingAnimationTrigger from '../../on_scrolling_animation/ScrollingAnimationTrigger'
import TypingWriter from './typing_writer/TypingWriter'
export default function Headline() {
    return (
        <div className="headline" >
            <ScrollingAnimationTrigger beforeActivateClassName="headline-text-scrolling-animation">
                <h5 className="SegoeUI-font regular">Let's go</h5>
                <h1 className="SegoeUI-font bold ">Beyond Impossible<br/>Make It <TypingWriter infinite text={["Creative","innovation"]}></TypingWriter> </h1>
                <p  className="FireMono-font regular">Creating incredible website woo you audience and build your brand</p>
            </ScrollingAnimationTrigger>
            <ScrollingAnimationTrigger beforeActivateClassName="headline-underline-scrolling-animation">
                <hr />
            </ScrollingAnimationTrigger>
            <ScrollingAnimationTrigger beforeActivateClassName="headline-button-scrolling-animation">
                <MassiveButton>Contact me</MassiveButton>
            </ScrollingAnimationTrigger>
        </div>
    )
}
