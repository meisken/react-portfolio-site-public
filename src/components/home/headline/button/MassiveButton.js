import React from 'react'

export default function MassiveButton({children,...rest}) {
    return (
        <div className="massive-btn" {...rest}>
            {children}
        </div>
    )
}
