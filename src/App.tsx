import React from 'react';
import WelcomePage from './components/welcomPage'
import ChooseTheEventPage from './components/chooseTheEventPage'
import ForWhopage from './components/forWhoPage'

import './App.css';

export type AppState = {
  currPage: string;
  forWho?: string;
  typeOfEvent: string;
};

export class App extends React.PureComponent<{}, AppState>{
  state: AppState = {
    currPage: "welcome",
    typeOfEvent: "default"
  };

  async componentDidMount() {
    this.setState({
      currPage:"welcome",
      typeOfEvent: "default"
    })
  }

  render() {
    return (<div>
      {this.choosePageToRender()}
  </div>)
  }

  choosePageToRender = () => {
    if(this.state.currPage === "Choose The Event"){
      return <ChooseTheEventPage chosenEvent={this.updateTypeOfEvent}/>
    }
    else if(this.state.currPage === "for who?"){
      return <ForWhopage typeOfEvent={this.state.typeOfEvent}/>
    }
    return <WelcomePage startButton={this.changeToChooseTheEvent}/>
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

}

export default App;

