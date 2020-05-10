
//import React, {Component} from 'react';
// Component based UserInput.
// class UserInput extends Component {

//     render() {
//         return (
//             <div>
//                 Please enter User name : <input onChange={this.props.updateUserName}></input>
//             </div>
//         );
//     }
// }

// Functional Component.
import React from 'react';
const UserInput = (props) => {
    return (
        <div>
            Please enter User name : 
            <input 
            onChange={props.updateUserName}
            value={props.username}/>
        </div>
    );
}

export default UserInput;