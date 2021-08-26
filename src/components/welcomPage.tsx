import React from 'react'
import './welcomePage.scss'


export interface welcomePageProps {
  startButton: () => void,
}

const WelcomePage = (props: welcomePageProps) => {
  return (
    <div>
      <h2 className='sub-text'>Never Stay Speechless</h2>
      <button className='startButton' onClick={props.startButton}>start</button>
    </div>)
}

export default WelcomePage;