import React from 'react'


export interface welcomePageProps{
    startButton: () => void,
}

const WelcomePage = (props:welcomePageProps) => {
    return (
      <div>
        <h1>BlessU</h1>
        <h2>Never stay speechless</h2>
        <button onClick={props.startButton}>start</button>
      </div>)
}

export default WelcomePage;