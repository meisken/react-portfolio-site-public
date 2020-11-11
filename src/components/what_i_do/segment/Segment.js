import React from 'react'
import InvertedButton from '../../global/InvertedButton'

export default function Segment({imgSrc,heading,detail,learnMoreLink}) {
    const redirect = () => {
        window.location.href = learnMoreLink
    }
    return (
        <div className="segment">
            <img src={imgSrc}/>
            <h4 className="SegoeUI-font semibold">{heading}</h4>
            <p className="SegoeUI-font light">{detail}</p>
            <InvertedButton onClick={() => {redirect()}}>Learn more</InvertedButton>
        </div>
    )
}
