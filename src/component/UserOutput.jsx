import React, {Component} from 'react';

class UserOutput extends Component {

    render() {
        return (
            <div>
                <p>{this.props.username}</p>
            </div>
        );
    }
}

export default UserOutput;