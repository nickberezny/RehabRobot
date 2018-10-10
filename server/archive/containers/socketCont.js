import React, { Component } from "react";
import { connect } from 'react-redux'
import io from "socket.io-client";

class SocketCont extends Component {

  constructor() {
    super();
    this.state = {
        socket: null
      }
  }

  componentDidMount() {
    const socketio = io();
    socketio.on('message', this.handleMessage) 
    console.log(socketio);
    this.setState({ socket: socketio })
  }

  handleMessage = (message) => {
    console.log(message);
    this.state.socket.emit('HEY')
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default SocketCont;
//