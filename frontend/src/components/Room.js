import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Room() {
  const { roomCode } = useParams();

  const [state, setState] = React.useState({
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
  });

  useEffect(() => {
    console.log('Component mounted with params:', roomCode);
  }, [roomCode]);

  

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant='h6' component="h6">
          Code: {roomCode}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant='h6' component="h6">
          Votes: {state.votesToSkip}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant='h6' component="h6">
          Guest Can Pause: {state.guestCanPause.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant='h6' component="h6">
          Host: {state.isHost.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Button variant='contained' color="secondary" to='/' component={Link}>
          LEAVE ROOM
        </Button>
      </Grid>
    </Grid>
  );
}
