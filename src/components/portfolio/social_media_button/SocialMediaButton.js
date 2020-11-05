import React, { useState } from 'react'
import './style/index.css'
import githubIcon from "./icon/Github.svg"
export default function SocialMediaButton({mediaName,mediaLink}) {

    const mediaPatterns =  {
        github:{
            bgColor:"#ffffff",
            textColor:"#000000",
            name:"Github"
        },
        facebook:{
            bgColor:"#4267B2",
            textColor:"#ffffff",
            name:"Facebook"
        },
        google:{
            bgColor:"#ffffff",
            textColor:"#000000",
            name:"Google"
        },
        youtube:{
            bgColor:"#FF0000",
            textColor:"#ffffff",
            name:"Youtube"
        },
        twitter:{
            bgColor:"#ffffff",
            textColor:"#000000",
            name:"Twitter"
        },
        reddit:{
            bgColor:"#ffffff",
            textColor:"#000000",
            name:"Reddit"
        },
        instagram:{
            bgColor:"#ffffff",
            textColor:"#000000",
            name:"Reddit"
        }
        

    }

    return (
        <a href={mediaLink}>
            <div className="social-media-button" style={{background:mediaPatterns[mediaName].bgColor}}>
                <img src={require(`./icon/${mediaPatterns[mediaName].name}.svg`)} className="media-icon"/>
                <span style={{color:mediaPatterns[mediaName].textColor}} className="media-name SegoeUI-font semibold">{mediaPatterns[mediaName].name}</span>
            </div>
        </a>

    )
}
