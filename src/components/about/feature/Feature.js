import React from 'react'
import Title from '../UnderlineTitle'
import SubSegments from './subsegments/Subsegments'
export default function Feature() {
    const features =[
        {subheading:"Aesthetic and User-friendly UI",details:"I designing and developing website with intuitive UI which can be avoiding  user get confused and guessing."},
        {subheading:"Full responsive",details:"I make all the web page that look good on all devices. And it will automatically adjust for different screen sizes and viewports."},
        {subheading:"Great Support",details:"I usually reply messages within fifteen minutes. then I will solve any problem you got as soon as possible."},

    ]
    return (
        <div className="feature">
                <Title key="2">{"Feature & Skills"}</Title>

                <article>
                    <h3>Why choose me</h3>
                    <p className="SegoeUI-font light">I can build you website with code and custom any function you want to a large extent. Also I use the most popular programming language which ensure the website can be stable and Maintainable.</p>
                    
                    <SubSegments dataArray={features}></SubSegments>

                </article>
        </div>
    )
}
