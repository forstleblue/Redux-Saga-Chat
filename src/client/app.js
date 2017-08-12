import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { AppBar, FlatButton } from 'material-ui';
import { Welcome, Room } from './views';
import { logout } from './actions';

class App extends Component {
    render() {
        const { username } = this.props;
        let body, right;
        if(username) {
            body = <Room />;
        } else {
            body = <Welcome />
        }

        return (
            <div>
                <AppBar title="Chat" />
                {body}
            </div>
        )
    }
}

export default App;