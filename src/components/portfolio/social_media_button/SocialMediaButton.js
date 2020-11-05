import React, { useState } from 'react'
import './style/index.css'
import githubIcon from "./icon/github.svg"
export default function SocialMediaButton() {

    return (
        <div className="social-media-button">
            <img src={githubIcon} className="media-icon"/>
            <span className="media-name SegoeUI-font semibold">Github</span>
        </div>
    )
}
