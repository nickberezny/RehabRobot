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
    let dataToSend = 'RUN'
    console.log(dataToSend)
    this.props.socket.emit('START_ROBOT',dataToSend)

    this.props.setValue('run', 1)
  
  }

  render() {

    return (
      <div>
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
    stage: state.stage
  }
}

export default connect(
  mapStateToProps,
  { runRobot, setValue }
)(RunButton);

//