import React, {Component} from 'react';

class UserInput extends Component {

    render() {
        return (
            <div>
                Please enter User name : <input onChange={this.props.updateUserName} value={this.props.username}></input>
            </div>
        );
    }
}

export default UserInput;