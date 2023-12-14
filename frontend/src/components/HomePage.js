import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomJoinPage from './CreateRoomJoinPage';
import Room from './Room';

import mani1Image from '../../static/images/mani1.jpg';




export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
  }

  async componentDidMount() {
    
    this.setState({
      roomCode: null, 
    });
  }
  renderHomePage() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
        <img src={mani1Image} alt="Your Image" height="300px" width="300px" />
          <Typography variant='h3' component="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant='contained' color="primary">
            <Button color='primary' component={Link} to='/join'>
              Join A Room
            </Button>
            <Button color='secondary' component={Link} to='/create'>
              Create A Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  render() {
    const { roomCode } = this.state;

    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={roomCode ? <Navigate to={`/room/${roomCode}`} /> : this.renderHomePage()}
          />
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomJoinPage />} />
          <Route path="/room/:roomCode" element={<Room />} />
        </Routes>
      </Router>
    );
  }
}
