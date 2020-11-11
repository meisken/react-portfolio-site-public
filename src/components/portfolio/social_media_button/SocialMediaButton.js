import React from 'react'
import './style/index.css'
export default function SocialMediaButton({mediaName,mediaLink}) {

    const mediaPatterns =  {
        github:{
            bgColor:"#ffffff",
            textColor:"#000000",
            name:"Github",
            link:"https://github.com/meisken?tab=repositories"
        },
        facebook:{
            bgColor:"#4267B2",
            textColor:"#ffffff",
            name:"Facebook",
            link:"https://www.facebook.com/ken32146/"
        },
        google:{
            bgColor:"#ffffff",
            textColor:"#000000",
            name:"Google",
            link:"#"
        },
        youtube:{
            bgColor:"#FF0000",
            textColor:"#ffffff",
            name:"Youtube",
            link:"#"
        },
        twitter:{
            bgColor:"#ffffff",
            textColor:"#000000",
            name:"Twitter",
            link:"#"
        },
        reddit:{
            bgColor:"#ffffff",
            textColor:"#000000",
            name:"Reddit",
            link:"#",
   
        },
        instagram:{
            bgColor:"#ffffff",
            textColor:"#000000",
            name:"Reddit",
            link:"#"
        }
        

    }

    return (
        <a href={mediaPatterns[mediaName].link}>
            <div className="social-media-button" style={{background:mediaPatterns[mediaName].bgColor}}>
                <img src={require(`./icon/${mediaPatterns[mediaName].name}.svg`)} className="media-icon"/>
                <span style={{color:mediaPatterns[mediaName].textColor}} className="media-name SegoeUI-font semibold">{mediaPatterns[mediaName].name}</span>
            </div>
        </a>

    )
}
