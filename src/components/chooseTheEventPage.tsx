import React from 'react'

export interface ChooseTheEventProps {
  chosenEvent: (typeOfEvent:string) => void,
}

const ChooseTheEventPage = (props:ChooseTheEventProps) => {
    return (
      <div>
        <h1>Choose the event</h1>
        <button onClick={()=>props.chosenEvent("birthday")}>Birthday</button>
        <button onClick={()=>props.chosenEvent("wedding")}>Wedding</button>
      </div>)
}

export default ChooseTheEventPage;