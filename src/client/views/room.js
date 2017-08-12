import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { TextField, FlatButton } from 'material-ui';

class Room extends Component {
    render() {
        const { users, messages } = this.props;
        return(
            <div style={{display: 'flex' }}>
                <div style={{width: '400px' }}>
                    <List>
                        {Object.keys(users).map((username, i) => 
                            <ListItem primaryText={username} key={`${i}:${username}`} />
                        )}
                    </List>
                </div>
            </div>
        )
    }
}