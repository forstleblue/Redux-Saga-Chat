import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TextField, FlatButton } from 'material-ui';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { login } from '../actions';

class Welcome extends Component {
    render() {
        return(
            <div style={{display: 'flex', marginTop: '32px'}}>
                <div style={{ flex: 1}}></div>
                <div style={{width: '400px'}}>
                    <Card>
                        <CardTitle
                            title="Welcome"
                        />
                        <CardText>
                        To start chat, please choose your name in the room.
                            <TextField
                                id="welcome-username"
                                hintText="E.g. Alice, Bob, ..."
                                floatingLabelText="Display Name"
                            />
                        </CardText>
                    </Card>
                </div>
                <div style= {{style: 1}}></div>
            </div>
        )
    }
}

export default Welcome