import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { runRobot } from "../../src/actions";

import io from "socket.io-client";

class RunButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.run = this.run.bind(this);
  }

  run() {

    //change this to send different data
    let dataToSend = 'SET_P' + this.props.P + '_D' + this.props.D + '_xdes' + this.props.xdes + '_END';
    console.log(dataToSend)
    this.props.socket.emit('START_ROBOT',dataToSend)
  
  }

  render() {

    return (
      <Button variant="contained" color="primary" onClick={this.run}>
        {this.props.text}
      </Button>
    )
  }
}

function mapStateToProps(state) {
  return {
    socket: state.socket,
    P: state.P,
    D: state.D,
    xdes: state.xdes
  }
}

export default connect(
  mapStateToProps,
  { runRobot }
)(RunButton);

//