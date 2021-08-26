import React from 'react';
import WelcomePage from './components/welcomPage'
import ChooseTheEventPage from './components/chooseTheEventPage'
import ForWhopage from './components/forWhoPage'

import './App.css';

export type Person = {
  name: string;
  nickname: string;
  age: string;
  bestQualities: string[];
}
const emptyPerson: Person = { name: "empty", nickname: "empty", age: "empty", bestQualities: [] }

export type AppState = {
  currPage: string;
  typeOfEvent: string;
  recipient1: Person;
  relationship: string;
  recipient2: Person;
  writer: Person;

};

export class App extends React.PureComponent<{}, AppState>{
  state: AppState = {
    currPage: "welcome",
    typeOfEvent: "default",
    recipient1: emptyPerson,
    relationship: "default",
    recipient2: emptyPerson,
    writer: emptyPerson,
  };

  async componentDidMount() {
    this.setState({
      currPage: "welcome",
      typeOfEvent: "default",
      recipient1: emptyPerson,
      relationship: "default",
      recipient2: emptyPerson,
      writer: emptyPerson,
    })
  }

  render() {
    return (<div>
      {this.choosePageToRender()}
    </div>)
  }

  choosePageToRender = () => {
    if (this.state.currPage === "welcome") {
      return <WelcomePage startButton={this.changeToChooseTheEvent} />
    }
    else if (this.state.currPage === "Choose The Event") {
      return <ChooseTheEventPage chosenEvent={this.updateTypeOfEvent} />
    }
    else if (this.state.currPage === "for who?") {
      return <ForWhopage typeOfEvent={this.state.typeOfEvent} updateData={this.updateDetails} />
    }
    return (<div>{this.genGreeting()}</div>)
  }

  changeToChooseTheEvent = () => {
    this.setState({
      currPage: "Choose The Event",
    })
  }

  updateTypeOfEvent = (typeOfEvent: string) => {
    this.setState({
      typeOfEvent: typeOfEvent,
      currPage: "for who?",
    })
  }

  updateDetails = (recipient1: Person, recipient2: Person, writer: Person, relationship: string) => {
    this.setState({
      recipient1: recipient1,
      recipient2: recipient2,
      writer: writer,
      relationship: relationship,
      currPage: "generate Greeting",
    })
  }

  genBirthday = (recipient1: Person, writer: Person, relationship: string) => {
    return (<div>
      <h1>Dear {recipient1.name}!</h1>
      <p>Hope you have a happy {recipient1.age} birthday!</p>
      <p>I wish for you that you will always stay {recipient1.bestQualities[0]}, {recipient1.bestQualities[1]} and {recipient1.bestQualities[2]} as you are.</p>
      <p>Hope your birthday brings some time to relax, do your favorite things, and remember how much you’re loved.</p>
      <p>Love you, {writer.name}.</p>
    </div>)
  }

  genWedding = (recipient1: Person, recipient2: Person, writer: Person, relationship: string) => {
    return (<div>
      <h1>Dear {recipient1.name} and {recipient2.name}!</h1>
        <p>Congratulations on your wedding day and best wishes for a happy life together!</p>
        <p>May the love you share today grow stronger as you grow old together.</p>
        <p>May your marriage be filled with all the right ingredients: a heap of love, a dash of humor, a touch of romance, and a spoonful of understanding.</p>
        <p>May your joy last forever. Congratulations!.</p>
        <p>Love you, {writer.name}.</p>
    </div>)
  }

  genGreeting = () => {
    if (this.state.typeOfEvent === "birthday")
      return <div>{this.genBirthday(this.state.recipient1, this.state.writer, this.state.relationship)}</div>;
    else
      return <div>{this.genWedding(this.state.recipient1, this.state.recipient2, this.state.writer, this.state.relationship)}</div>;
  }

}

export default App;

