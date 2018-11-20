import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { runRobot } from "../src/actions";

import io from "socket.io-client";

class RunButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
        socket: null
      }
  }

  componentDidMount() {
    const socketio = io('http://192.168.2.205:3000');
    socketio.on('message', this.handleMessage) 
    console.log(socketio);
    this.setState({ socket: socketio })
  }

  componentWillUnmount () {
    console.log('unmount')
    this.state.socket.close()
  }

  handleMessage = (message) => {
    console.log(message);
    console.log('recieved');
  }

  onClick() {

    let dataToSend = 'r!' + this.props.controller + '!' + this.props.K + '!' + this.props.B + '!' 
    console.log(dataToSend)
    console.log(this.state.socket)
    this.state.socket.emit('START_ROBOT',dataToSend)
  
    };

  render() {

    return (
      <Button variant="contained" color="primary" onClick={this.onClick}>
        Run Robot
      </Button>
    )
  }
}

function mapStateToProps(state) {
  return { 
    K: state.kParam,
    B: state.bParam,
    controller: state.controller
    }
}

export default connect(
  mapStateToProps,
  { runRobot }
)(RunButton);

//