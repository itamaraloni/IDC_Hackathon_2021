import React from 'react'
import './chooseTheEventPage.scss'

export interface ChooseTheEventProps {
  chosenEvent: (typeOfEvent: string) => void,
}

const ChooseTheEventPage = (props: ChooseTheEventProps) => {
  return (
    <div>
      <h1 className="header">Choose The Event</h1>
      <button className="birthday" onClick={() => props.chosenEvent("birthday")}>Birthday</button>
      <button className="wedding" onClick={() => props.chosenEvent("wedding")}>Wedding</button>
    </div>)
}

export default ChooseTheEventPage;