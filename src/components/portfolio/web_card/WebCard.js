import React from 'react'
import PropTypes from 'prop-types';
export default function WebCard({num,heading,segment,imgPath}) {
    return (
        <div className="web-card all-center">
            <div>
                <h1 className="SegoeUI-font bold mb-35">{num}</h1>
                <h2 className="Javanese-text-font">{heading}</h2>
                <p className="SegoeUI-font light mb-40 ">{segment}</p>
            </div>
            <img className="cover-photo" src={imgPath} />
        </div>
    )
}

WebCard.propTypes = {
    imgPath:PropTypes.string
};