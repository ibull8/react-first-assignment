import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component{
  state = {username: 'Change Here Svolach'};
  
  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render(){
  return (
    <div className="App">
      <h1>Niuya</h1>
      <UserInput changed={this.usernameChangedHandler} currentName= {this.state.username}/>
      <UserOutput userName={this.state.username}></UserOutput>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName='Ilan'/>
    </div>
  )}
};

export default App;
