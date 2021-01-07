import React from 'react'
import Segment from "./segment/Segment"
export default function WhatIDo() {
    const segments = [
        {imgSrc:require("../../img/web_development.svg"),heading:"Web Development",learnMoreLink:"https://en.wikipedia.org/wiki/Web_development",detail:"Developing the fully responsive and user friendly website. Concern every detail of user experience. And ensure the web page that looks good on all devices"},
        {imgSrc:require("../../img/design.svg"),heading:"Web Ui Design",learnMoreLink:"https://en.wikipedia.org/wiki/User_interface",detail:"Designing outstanding website by combining your company ideas. Leave a great first impression and unforgettable memories to your customer."},
        
    ]
    return (
        <div className="what-i-do" id="what-i-do-page">
            <div className="wrapper">
                <h3 className="title Consolas-font bold">What I Do</h3>
                <div className="content">
                    {segments && segments.map(({imgSrc,heading,detail,learnMoreLink},index) => {
                        return(
                            <Segment key={index} imgSrc={imgSrc} heading={heading} detail={detail} learnMoreLink={learnMoreLink}></Segment>
                        )
                        
                    })}

                </div>
            </div>

        </div>
    )
}
