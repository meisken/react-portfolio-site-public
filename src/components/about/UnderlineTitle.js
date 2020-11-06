import React from 'react'

export default function Title({children}) {
    return (
        <div className="underline-small-title">
            <h6 className="SegoeUI-font regular">{children}</h6>
            <hr/>
        </div>
    )
}
