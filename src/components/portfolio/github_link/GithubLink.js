import React from 'react'
import githubIcon from './github.svg'
import popOutIcon from './popOut.svg'
export default function GithubLink() {
    return (
        <div>
            <img className="github-icon" src={githubIcon}></img>
            <span>Github</span>
            <img className="pop-out-icon" src={popOutIcon}/>
        </div>
    )
}
