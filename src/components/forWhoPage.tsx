import React from 'react'
import { Person } from '../App'
import './forWhoPage.scss'


let firstRecipient: Person = { name: "empty", nickname: "empty", age: "empty", bestQualities: [] }
let secondRecipient: Person = { name: "empty", nickname: "empty", age: "empty", bestQualities: [] }
let writer: Person = { name: "empty", nickname: "empty", age: "empty", bestQualities: [] }

export interface ForWhopageProps {
  typeOfEvent: string,
  updateData: (forWho1: Person, forWho2: Person, fromWho: Person, relationship: string) => void,
}

const ForWhopage = (props: ForWhopageProps) => {
  return (
    <div>
      {chooseTypeToRender(props)}
    </div>)
}

const chooseTypeToRender = (props: ForWhopageProps) => {
  if (props.typeOfEvent === "birthday") {
    return (
      <div>
        <h1 className='BDheader'>Insert Additional Details</h1>
        <img className='BDcakeImage'
          src="https://i.pinimg.com/736x/e5/38/38/e53838a885715e5f27d2d144df635611.jpg"
          alt="new"
        />
        <form className='BDNameForm'>
          <label className='BDNameQuery'>Your name: 
          <input
            type="text"
            id="myNameB"
            name="myNameB"
            onChange={() => handleChangeBD()}
          />
          </label>
          <br/>
          <br/>
          <label className='BDNameQuery'>Reciepient's name: 
          <input
            type="text"
            id="name"
            name="name"
            onChange={() => handleChangeBD()}
          />
          </label>
          <br/>
          <br/>
          <label className='BDNameQuery'>Reciepient's age: 
          <input
            type="text"
            id="age"
            name="age"
            onChange={() => handleChangeBD()}
          />
          </label>
          <br/>
          <br/>
          <label>Reciepient's best qualities: 
            <br/>
            <input type="text" id="q1" name="q1" onChange={() => handleChangeBD()} />
            <input type="text" id="q2" name="q2" onChange={() => handleChangeBD()} />
            <input type="text" id="q3" name="q3" onChange={() => handleChangeBD()} />
            </label>
        </form>
        <button className='BDnext' onClick={() => props.updateData(firstRecipient, secondRecipient, writer, "father")}>Next</button>
      </div>)
  }
  else { // type of event is wedding
    return (
      <div>
        <h1 className='Wheader'>Insert Additional Details</h1>
        <img className='Wcouple'
          src="https://i.ibb.co/6PBM3pS/weddingcouple.png"
          alt="new"
        />
        <form className='WBnameForm'>
          <label className='BDNameQuery'>Your name: 
            <input
              type="text"
              id="myNameW"
              name="myNameW"
              onChange={() => handleChangeWedding()}
            />
          </label>
          <br/>
          <br/>
          <label>Bride's name:
          <input
            type="text"
            id="bride name"
            name="name"
            onChange={() => handleChangeWedding()}
          />
          </label>
          <br/>
          <br/>
          <label>Groom's name:
          <input
            type="text"
            id="groom name"
            name="name"
            onChange={() => handleChangeWedding()}
          />
          </label>
        </form>
        <button className='Wnext' onClick={() => props.updateData(firstRecipient, secondRecipient, writer, "father")}>Next</button>
      </div>)
  }
}

const handleChangeBD = () => {
  writer.name = (document.getElementById("myNameB") as HTMLInputElement).value;
  firstRecipient.name = (document.getElementById("name") as HTMLInputElement).value;
  firstRecipient.age = (document.getElementById("age") as HTMLInputElement).value;
  const q1: string = (document.getElementById("q1") as HTMLInputElement).value;
  const q2: string = (document.getElementById("q2") as HTMLInputElement).value;
  const q3: string = (document.getElementById("q3") as HTMLInputElement).value;
  firstRecipient.bestQualities = [q1, q2, q3];
}

const handleChangeWedding = () => {
  writer.name = (document.getElementById("myNameW") as HTMLInputElement).value;
  firstRecipient.name = (document.getElementById("bride name") as HTMLInputElement).value;
  secondRecipient.name = (document.getElementById("groom name") as HTMLInputElement).value;

}
export default ForWhopage;
