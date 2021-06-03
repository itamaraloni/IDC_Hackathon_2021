import React from 'react';
import WelcomePage from './components/welcomPage'
import ChooseTheEventPage from './components/chooseTheEventPage'
import ForWhopage from './components/forWhoPage'

import './App.css';

export type Person ={
  name: string;
  nickname: string;
  age: string;
  bestQualities: string[];
}
const emptyPerson:Person = {name: "empty", nickname: "empty", age: "empty", bestQualities: []}

export type AppState = {
  currPage: string;
  typeOfEvent: string;
  forWho1: Person;
  relationship: string;
  forWho2: Person;
  fromWho: Person;

};

export class App extends React.PureComponent<{}, AppState>{
  state: AppState = {
    currPage: "welcome",
    typeOfEvent: "default",
    forWho1: emptyPerson,
    relationship: "default",
    forWho2: emptyPerson,
    fromWho: emptyPerson,
  };

  async componentDidMount() {
    this.setState({
      currPage:"welcome",
      typeOfEvent: "default",
      forWho1: emptyPerson,
      relationship: "default",
      forWho2: emptyPerson,
      fromWho: emptyPerson,
    })
  }

  render() {
    return (<div>
      {this.choosePageToRender()}
  </div>)
  }

  choosePageToRender = () => {
    if(this.state.currPage === "welcome"){
      return <WelcomePage startButton={this.changeToChooseTheEvent}/>
    }
    else if(this.state.currPage === "Choose The Event"){
      return <ChooseTheEventPage chosenEvent={this.updateTypeOfEvent}/>
    }
    else if(this.state.currPage === "for who?"){
      return <ForWhopage typeOfEvent={this.state.typeOfEvent} updateData={this.updateFromWho}/>
    }
    return (<div>{this.genGreeting()}</div>)
  }

  changeToChooseTheEvent = () => {
    this.setState({
      currPage:"Choose The Event",
    })
  }

  updateTypeOfEvent = (typeOfEvent:string) => {
    this.setState({
      typeOfEvent: typeOfEvent,
      currPage: "for who?",
    })
  }

  updateFromWho = (forWho1:Person, forWho2:Person, relationship:string) => {
    this.setState({
      forWho1: forWho1,
      forWho2: forWho2,
      relationship: relationship,
      currPage: "generate Greeting",
    })
  }

  genBirthday = (forWho1: Person, fromWho: Person, relationship: string) => {
    return (<div>
            <h1>Dear {forWho1.name}!</h1>
            <p>Hope you have a happy {forWho1.age}th birthday!</p>
            <p>Another year older, and you just keep getting {forWho1.bestQualities[0]}, {forWho1.bestQualities[1]}, {forWho1.bestQualities[2]} and more amazing!</p>
            <p>Hope your birthday brings some time to relax, do your favorite things, and remember how much you’re loved</p>
            <p>Love you, {forWho1.name}.</p>
          </div>)
  }

 genWedding = (forWho1: Person, forWho2: Person, fromWho: Person, relationship: string) => {
    return (<div>
        <h1>Dear {forWho1.name} and {forWho2.name}!</h1>
        <p>Congratulations on your wedding day and best wishes for a happy life together!
            May the love you share today grow stronger as you grow old together.
            May your marriage be filled with all the right ingredients: a heap of love, a dash of humor, a touch of romance, and a spoonful of understanding. May your joy last forever. Congratulations!.</p>
      </div>)
    }

  genGreeting = () => {
    if (this.state.typeOfEvent === "birthday")
      return <div>{this.genBirthday(this.state.forWho1, this.state.fromWho, this.state.relationship)}</div>;
    else 
      return <div>{this.genWedding(this.state.forWho1,this.state.forWho2, this.state.fromWho, this.state.relationship)}</div>;
  }

}

export default App;

