import React, { Component } from 'react';
import { Button, Container } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateRoomJoinPage extends Component {
  defaultVotes = 2;
  

  constructor(props) {
    super(props);
    this.state = {
      guestCanPause: true,
      votesToSkip: this.defaultVotes,
    };

    this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
    this.handleVotesChange = this.handleVotesChange.bind(this);
    this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
  }

  handleVotesChange(e) {
    this.setState({
      votesToSkip: e.target.value,
    });
  }

  handleGuestCanPauseChange(e) {
    this.setState({
      guestCanPause: e.target.value === "true" ? true : false,
    });
  }

  
  handleRoomButtonPressed() {
    const guestCanPause = this.state.guestCanPause !== undefined ? this.state.guestCanPause : true;
  
    const data = {
      votes_to_skip: this.state.votesToSkip,
      guest_can_pause: guestCanPause,
    };
  
    axios.post('/api/create-room/', data)
      .then(response => {
        console.log('Success:', response.data);
        
      })
  }
  

  render() {
    return (
      <Container>
        <Grid container spacing={1} alignItems='center' justifyContent='center'>
          <Grid item xs={12} align="center">
            <Typography component='h4' variant='h4'>Create a room</Typography>
          </Grid>
          
          <Grid item xs={12} align="center">
            <FormControl component='fieldset'>
              <FormHelperText style={{ textAlign: 'center' }}>
                Guest Control of playback State
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} align="center">
            <FormControl>
              <RadioGroup 
                row 
                defaultValue='true' 
                style={{ justifyContent: 'center' }}
                onChange={this.handleGuestCanPauseChange}
              >
                <FormControlLabel 
                  value='true'
                  control={<Radio color='primary' />}
                  label="play/pause"
                  labelPlacement="bottom"
                />

                <FormControlLabel 
                  value='false'
                  control={<Radio color='secondary' />}
                  label="No Control"
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} align="center">
            <FormControl>
              <TextField 
                required={true} 
                type="number" 
                onChange={this.handleVotesChange} 
                value={this.state.votesToSkip}  
                id="votesToSkip"  
                name="votesToSkip"
                inputProps={{
                  min: 1,
                  style: { textAlign: "center" }
                }}
              />
              <FormHelperText>
                Votes Required To Skip Song
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} align="center">
            <Button color="primary" variant="contained" onClick={this.handleRoomButtonPressed}>
              Create a Room
            </Button>
          </Grid>

          <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/" component={Link}>
              Back
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
