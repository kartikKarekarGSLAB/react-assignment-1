import React, { Component } from 'react';
import './../styles/App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


class Application extends Component {
  
  state = {
    username : `Welcome User..`
  }

  updateUserName = (event) => {
    this.setState({username : event.target.value});
  }

  render() {
    return (
      <div className="App">
        <UserInput updateUserName={this.updateUserName} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default Application;
