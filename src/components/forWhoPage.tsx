import React from 'react'

export interface ForWhopageProps {
  typeOfEvent: string,
  updateData: (forWho1:string, forWho2:string, relationship:string) => void,
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
        {/* <br></br><input type="text" id="fname">       */}
      </div>) 
  }
  return (<h1>For who?</h1>)
}

export default ForWhopage;

