import React from 'react'

export interface ForWhopageProps {
  typeOfEvent: string,
}

const ForWhopage = (props:ForWhopageProps) => {
    return (
      <div>
        {chooseTypeToRender(props)}
      </div>)
}

const chooseTypeToRender = (props:ForWhopageProps) => {
  console.log(props.typeOfEvent);
  if(props.typeOfEvent === "birthday"){
    return (
      <div>
        <h1>For who?</h1>
        <button>left</button>
        <button>right</button>      
      </div>) 
  }
  return (<h1>For who?</h1>)
}

export default ForWhopage;

