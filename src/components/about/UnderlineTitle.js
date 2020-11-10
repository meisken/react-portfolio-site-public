import React from 'react'
import ScrollingAnimationTrigger from '../on_scrolling_animation/ScrollingAnimationTrigger'
export default function Title({children}) {
    return (
        <ScrollingAnimationTrigger beforeActivateClassName="about-scrolling-animation" leavingReset>
            <div className="underline-small-title">
                <h6 className="SegoeUI-font regular">{children}</h6>
                <hr/>
            </div>
        </ScrollingAnimationTrigger>

    )
}
