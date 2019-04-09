import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { runRobot } from "../../src/actions";

import io from "socket.io-client";

class HomeButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.run = this.run.bind(this);
  }

  run() {

    //change this to send different data
    let dataToSend = 'HOME'
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
    socket: state.socket
  }
}

export default connect(
  mapStateToProps,
  { runRobot }
)(HomeButton);

//