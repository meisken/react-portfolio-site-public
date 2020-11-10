import React,{useState} from 'react'
import WebCard from './web_card/WebCard'
import SocialMediaButton from './social_media_button/SocialMediaButton'




export default function Portfolio() {
    
    const [webs,setWebs] = useState([
        {num:"01",heading:"Audio Streaming Website",segment:(<span>Enjoy amazing music here and relax with the music live demo: <a href="https://meiskena-audio.web.app/">audio.com</a></span>),videoPath:require('../../video/audio_website.mp4'),poster:require('../../img/audio.png')},
        {num:"02",heading:"Online Calendar Web app",segment:(<span>Manage your time. Reduce unnecessary time spending live demo: <a href="https://calendar-957dd.web.app/">calendar.com</a></span>),videoPath:require('../../video/calendar_website.mp4'),poster:require('../../img/schedule.png')},
        {num:"03",heading:"Personal Portfolio Website",segment:"Here is the showcase which placing my works. It shows apart of my ability.",videoPath:require('../../video/audio_website.mp4'),poster:require('../../img/audio.png')}
    ]);
    return (
        <div className="portfolio" id="portfolio-page">

            <div className="introduction">
     
                <h1 className="Consolas-font bold">Portfolio</h1>
                <p className="SegoeUI-font regular ">These website ideas come from something which I want to use in my daily life. Therefore, They all are functional and interactive.</p>
                <div className="social-media-links">
                    <SocialMediaButton mediaName="github"/>
                    <SocialMediaButton mediaName="facebook"/>
              
                </div>


            </div>
            {webs && webs.map( ({num,heading,segment,videoPath,poster},index) => {
  
                return <WebCard key={index} num={num} heading={heading} segment={segment} videoPath={videoPath} poster={poster} />
            })}
      
        </div>
    )
}

