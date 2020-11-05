import React,{useState} from 'react'
import WebCard from './web_card/WebCard'
import SocialMediaButton from './social_media_button/SocialMediaButton'




export default function Portfolio() {
    
    const [webs,setWebs] = useState([
        {num:"01",heading:"Audio Streaming",segment:"A hand picked list of 12 best free website mockup templates with high",imgPath:require('../../img/audio.png')},
        {num:"01",heading:"Audio Streaming",segment:"A hand picked list of 12 best free website mockup templates with high",imgPath:require('../../img/audio.png')},
        {num:"01",heading:"Audio Streaming",segment:"A hand picked list of 12 best free website mockup templates with high",imgPath:require('../../img/audio.png')}
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
            {webs.map( ({num,heading,segment,imgPath},index) => {
                console.log(num,heading,segment,imgPath);
                return <WebCard key={index} num={num} heading={heading + " Website"} segment={segment} imgPath={imgPath} />
            })}
      
        </div>
    )
}

