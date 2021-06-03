import React from 'react'
import {Person} from '../App'
import './forWhoPage.scss'


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
        <form className = 'BDNameForm'>
          <p className = 'BDNameQuery'>Enter name:</p>
          <input
            type = "text"
            id = "name"
            name = "fullname"
            onChange = {() => handleChangeBD()}
          />
          </form>
          <form className = 'BDAgeForm'>
          <p className = 'BDAgeQuery'>Enter age:</p>
          <input
            type = "text"
            id = "age"
            name = "age"
            onChange = {() => handleChangeBD()}
          />
          <p>Enter best qualities:</p>
          <input type = "text" id = "q1" name = "q1" onChange = {() => handleChangeBD()}/>
          <input type = "text" id = "q2" name = "q2" onChange = {() => handleChangeBD()}/>
          <input type = "text" id = "q3" name = "q3" onChange = {() => handleChangeBD()}/>
        </form>
          <button className ='BDnext' onClick={() => props.updateData(emptyPerson1,emptyPerson1,"father")}>Next</button>
      </div>) 
  }
  else { // type of event is wedding
    return (
      <div>
        <h1 className = 'Wheader'>For who?</h1>
        <img className = 'Wcouple'
            src="https://i.ibb.co/6PBM3pS/weddingcouple.png"
            alt="new"
        />
        <form className = 'WBnameForm'>
          <p>Enter bride's name:</p>
          <input
            type = "text"
            id = "bride name"
            name = "name"
            onChange={() => handleChangeWedding()}  
          />
          </form>
          <form className='WGnameForm'>
          <p>Enter groom's name:</p>
          <input
            type = "text"
            id = "groom name"
            name = "name"
            onChange={() => handleChangeWedding()}  
          />
        </form>
        <button className ='Wnext' onClick={() => props.updateData(emptyPerson1,emptyPerson2,"father")}>Next</button>
      </div>)
  }
}

const handleChangeBD = () => {
  emptyPerson1.name = (document.getElementById("name") as HTMLInputElement).value;
  emptyPerson1.age = (document.getElementById("age") as HTMLInputElement).value;
  const q1:string = (document.getElementById("q1") as HTMLInputElement).value;
  const q2:string = (document.getElementById("q2") as HTMLInputElement).value;
  const q3:string = (document.getElementById("q3") as HTMLInputElement).value;
  emptyPerson1.bestQualities = [q1, q2, q3];
  console.log(emptyPerson1.name);
  console.log(emptyPerson1.age);
}

const handleChangeWedding = () => {
  emptyPerson1.name = (document.getElementById("bride name") as HTMLInputElement).value;
  emptyPerson2.name = (document.getElementById("groom name") as HTMLInputElement).value;
  console.log(emptyPerson1.name);
} 
export default ForWhopage;
