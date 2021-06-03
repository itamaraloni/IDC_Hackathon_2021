import React from 'react'
import './welcomePage.scss'


export interface welcomePageProps{
    startButton: () => void,
}

const WelcomePage = (props:welcomePageProps) => {
    return (
      <div>
        <h1 className='header'>BlessU</h1>
        <h2 className='sub-text'>Never stay speechless</h2>
        <button className='startButton' onClick={props.startButton}>start</button>
      </div>)
}

export default WelcomePage;