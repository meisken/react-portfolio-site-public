import React from 'react'

export default function Subsegment({dataArray}) {
    const addZero = (num) => {
        if(num < 10){
            return '0' + num
        }
        return num
    }
    return (
        <ul className="subsegment">
            {dataArray && dataArray.map(({subheading,details},index) => {
                return (
                    <li key={index}>

                    <h5 className="index Consolas-font bold">{addZero(index + 1)}</h5>
        
                        <section>
                            <h5 className="subheading Consolas-font regular">{subheading}</h5>
                            <p className="SegoeUI-font light">{details}</p>
                        </section>
                
                    
                    </li>
                )
            })}

            
        </ul>
    )
}
