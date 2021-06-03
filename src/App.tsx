import React from 'react';
import WelcomePage from './components/welcomPage'
import ChooseTheEventPage from './components/chooseTheEventPage'
import ForWhopage from './components/forWhoPage'

import './App.css';

export type AppState = {
  currPage: string;
  typeOfEvent: string;
  forWho1: string;
  relationship: string;
  forWho2: string;
  fromWho: string;

};

export class App extends React.PureComponent<{}, AppState>{
  state: AppState = {
    currPage: "welcome",
    typeOfEvent: "default",
    forWho1: "default",
    relationship: "default",
    forWho2: "default",
    fromWho: "default",
  };

  async componentDidMount() {
    this.setState({
      currPage:"welcome",
      typeOfEvent: "default",
      forWho1: "default",
      relationship: "default",
      forWho2: "default",
      fromWho: "default",
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
    return (<div>todo change</div>)
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

  updateFromWho = (forWho1:string, forWho2:string, relationship:string) => {
    this.setState({
      forWho1: forWho1,
      forWho2: forWho2,
      relationship: relationship,
    })
  }

}

export default App;

