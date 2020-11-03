import React from 'react'

export default function InvertedButton({children,...rest}) {
    return (
        <div className="inverted-button" {...rest}>
            <h6 className="SegoeUI-font regular">{children}</h6>
        </div>
    )
}
