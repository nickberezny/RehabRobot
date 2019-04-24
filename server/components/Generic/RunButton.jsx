import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { runRobot } from "../../src/actions";
import {setValue} from "../../src/actions";

import io from "socket.io-client";

class RunButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.run = this.run.bind(this);
  }

  run() {

    //change this to send different data
    if(this.props.home == 1) 
    {
      let dataToSend = 'RUN'
      console.log(dataToSend)
      this.props.socket.emit('START_ROBOT',dataToSend)
      this.props.setValue('run', 1)
    }
    
  
  }

  render() {

    return (
      <div style={{padding: 12}}> 
      <Button variant="contained" color="primary" onClick={this.run}>
        {this.props.text}
      </Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    socket: state.socket,
    stage: state.stage,
    home: state.home
  }
}

export default connect(
  mapStateToProps,
  { runRobot, setValue }
)(RunButton);

//