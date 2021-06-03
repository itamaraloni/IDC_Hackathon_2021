import React from 'react'
import {Person} from '../App'


let emptyPerson1:Person = {name: "empty", nickname: "empty", age: "empty", bestQualities: []}
let emptyPerson2:Person = {name: "empty", nickname: "empty", age: "empty", bestQualities: []}

export interface ForWhopageProps {
  typeOfEvent: string,
  updateData: (forWho1:Person, forWho2:Person, relationship:string) => void,
}

const ForWhopage = (props:ForWhopageProps) => {
    return (
      <div>
        {chooseTypeToRender(props)}
      </div>)
}

const chooseTypeToRender = (props:ForWhopageProps) => {
  if(props.typeOfEvent === "birthday"){
    return (
      <div>
        <h1 className = 'BDheader'>For who?</h1>
        <button className = 'BDleftArrow'></button>
        <img className = 'BDcakeImage'
          src="https://i.pinimg.com/736x/e5/38/38/e53838a885715e5f27d2d144df635611.jpg"
          alt="new"
        />
        <h1 className = 'BDcharImage'>-BDcharImage-</h1>
        <button className = 'BDrightArrow'></button>
        <form>
          <p>Enter name:</p>
          <input
            type = "text"
            id = "name"
            name = "fullname"
            onChange = {() => handleChangeBD()}
          />
          <button className ='BDnext' onClick={() => props.updateData(emptyPerson1,emptyPerson1,"father")}>Next</button>
        </form>
      </div>) 
  }
  else { // type of event is wedding
    return (
      <div>
        <h1 className = 'Wheader'>For who?</h1>
        <form>
          <p>Enter bride's name:</p>
          <input
            type = "text"
            id = "bride name"
            name = "name"
            onChange={() => handleChangeBride()}  
          />
          <p>Enter groom's name:</p>
          <input
            type = "text"
            id = "groom name"
            name = "name"
            onChange={() => handleChangeGroom()}  
          />
        </form>
        <h2>weddingCouple</h2>
        <button className ='WNext' onClick={() => props.updateData(emptyPerson1,emptyPerson2,"father")}>Next</button>
      </div>)
  }
}

const handleChangeBD = () => {
  emptyPerson1.name = (document.getElementById("name") as HTMLInputElement).value;
  console.log(emptyPerson1.name);
}

const handleChangeBride = () => {
  emptyPerson1.name = (document.getElementById("bride name") as HTMLInputElement).value;
  console.log(emptyPerson1.name);
}

const handleChangeGroom = () => {
  emptyPerson2.name = (document.getElementById("groom name") as HTMLInputElement).value;
  console.log(emptyPerson1.name);

}
export default ForWhopage;
