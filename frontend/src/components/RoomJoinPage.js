import React, { Component } from 'react';
import { Button, Container } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';


export default class RoomJoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      error: false  
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.roomButtonPressed  = this.roomButtonPressed.bind(this);
  }

  roomButtonPressed = () => {
    const requestData = {
      code: this.state.roomCode
    };
    console.log(this.state.roomCode)
  };
  

  handleTextFieldChange(e) {
    this.setState({
      roomCode: e.target.value
    })
    
  };

  render() {
    return (
      <div>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={12} align="center">
            <Typography variant='h4' component="h4">
              Join A Room
            </Typography>
          </Grid>

          <Grid item xs={12} align='center'>
            <TextField
              error={Boolean(this.state.error)}
              placeholder="Enter a room code"
              value={this.state.roomCode}
              helperText={this.state.error ? "Error message" : ""}
              variant="outlined"
              onChange={ this.handleTextFieldChange}
              name='entercode'
            />
          </Grid>

          <Grid item xs={12} align='center'>
            <Button variant="contained" color="primary" onClick={this.roomButtonPressed }>
              Enter Room
            </Button>
          </Grid>

          <Grid item xs={12} align='center'>
            <Button variant="contained" color="secondary" to="/" component={Link}>
              Homepage
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }


  
}
