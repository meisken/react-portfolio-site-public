import React from 'react'
import Segment from "./segment/Segment"
export default function WhatIDo() {
    const segments = [
        {imgSrc:require("../../img/web_development.svg"),heading:"Web Development",detail:"Developing the fully responsive and user friendly website. Concern every detail of user experience. And ensure the web page that looks good on all devices"},
        {imgSrc:require("../../img/design.svg"),heading:"Web Ui Design",detail:"Designing outstanding website with combining your company ideas. Leave a great first impression and unforgivable memories to your customer."},
        
    ]
    return (
        <div className="what-i-do">
            <div className="wrapper">
                <h3 className="title Consolas-font bold">What I Do</h3>
                <div className="content">
                    {segments.map(({imgSrc,heading,detail},index) => {
                        return(
                            <Segment key={index} imgSrc={imgSrc} heading={heading} detail={detail}></Segment>
                        )
                        
                    })}

                </div>
            </div>

        </div>
    )
}
