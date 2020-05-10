// import React, {Component} from 'react';
// class UserOutput extends Component {

//     render() {
//         return (
//             <div>
//                 <p>Message : {this.props.username}</p>
//             </div>
//         );
//     }
// }


import React from 'react';
const UserOutput = (props) => {
    return (
        <div>
            <p>Message : {props.username}</p>
        </div>
    );    
}

export default UserOutput;