import React from 'react'
import PropTypes from 'prop-types';
export default function WebCard({num,heading,segment,imgPath}) {
    return (
        <div className="web-card all-center">
            <div className="description">
                <h1 className="SegoeUI-font bold">{num}</h1>
                <h2 className="Javanese-text-font">{heading}</h2>
                <p className="SegoeUI-font light ">{segment}</p>
            </div>
            <img className="cover-photo" src={imgPath} />
        </div>
    )
}

WebCard.propTypes = {
    imgPath:PropTypes.string
};