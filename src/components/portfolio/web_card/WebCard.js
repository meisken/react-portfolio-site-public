import React from 'react'
import PropTypes from 'prop-types';
export default function WebCard({num,heading,segment,videoPath,poster}) {
    return (
        <div className="web-card all-center">
            <div className="description">
                <h1 className="SegoeUI-font bold">{num}</h1>
                <h2 className="Javanese-text-font">{heading}</h2>
                <p className="SegoeUI-font light ">{segment}</p>
            </div>
            <video controls poster={poster} className="showcase-video" src={videoPath} type="video/mp4"/>
        </div>
    )
}

WebCard.propTypes = {
    imgPath:PropTypes.string
};