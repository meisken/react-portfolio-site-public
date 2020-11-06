import React,{useState} from 'react'
import WebCard from './web_card/WebCard'
import SocialMediaButton from './social_media_button/SocialMediaButton'




export default function Portfolio() {
    
    const [webs,setWebs] = useState([
        {num:"01",heading:"Audio Streaming",segment:"A hand picked list of 12 best free website mockup templates with high",videoPath:require('../../video/audio_website.mp4'),poster:require('../../img/audio.png')},
        {num:"01",heading:"Audio Streaming",segment:"A hand picked list of 12 best free website mockup templates with high",videoPath:require('../../video/audio_website.mp4'),poster:require('../../img/audio.png')},
        {num:"01",heading:"Audio Streaming",segment:"A hand picked list of 12 best free website mockup templates with high",videoPath:require('../../video/audio_website.mp4'),poster:require('../../img/audio.png')}
    ]);
    return (
        <div className="Portfolio">

            <div className="introduction">
     
                <h1 className="Consolas-font bold">Portfolio</h1>
                <p className="SegoeUI-font regular ">These works are something which I want to use in my daily life. Therefore They all are  functional and interactive website. Hope you enjoy</p>
                <div className="social-media-links">
                    <SocialMediaButton mediaName="github" mediaLink="#" />
                    <SocialMediaButton mediaName="facebook" mediaLink="#" />
              
                </div>


            </div>
            {webs && webs.map( ({num,heading,segment,videoPath,poster},index) => {
  
                return <WebCard key={index} num={num} heading={heading + " Website"} segment={segment} videoPath={videoPath} poster={poster} />
            })}
      
        </div>
    )
}

