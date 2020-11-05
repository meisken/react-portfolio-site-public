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
                <p className="SegoeUI-font light">A hand picked list of 12 best free website mockup templates with high quality to help on inspirations. Bonus is the best mockup tools for website</p>
                <ul className="web-list-nav ml-5 ">


                    {webs.map(({num,heading},index) => {
                        return (
                            <li className=" flex align-center justify-space-around mb-20" key={index}>
                                <h6 className="SegoeUI-font regular">{num}</h6><hr className="horizon" /><h6 className="Consolas-font regular" >{heading}</h6>
                            </li>
                        )
                    })}

                </ul>

                <SocialMediaButton />

            </div>
            {webs.map( ({num,heading,segment,imgPath},index) => {
                console.log(num,heading,segment,imgPath);
                return <WebCard key={index} num={num} heading={heading + " Website"} segment={segment} imgPath={imgPath} />
            })}
      
        </div>
    )
}

