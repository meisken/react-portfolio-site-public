import React from 'react'
import MassiveButton from './button/MassiveButton'
export default function Headline() {
    return (
        <div className="headline" >
            <h5 className="SegoeUI-font regular">Let's go</h5>
            <h1 className="SegoeUI-font bold ">Beyond Impossible <br/> Make it Real with website</h1>
            <p  className="FireMono-font regular">Creating incredible website with creative and innovation thinking</p>
            <hr />
            <MassiveButton>Contact me</MassiveButton>
        </div>
    )
}
