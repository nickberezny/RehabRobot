import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { runRobot } from "../../src/actions";

class BasicButton extends React.Component {
  
  constructor(props) {
    super(props);
  }

  /*

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

    //change this to send different data
    let dataToSend = 'r!' + this.props.controller + '!' + this.props.K + '!' + this.props.B + '!'

    console.log(dataToSend)
    console.log(this.state.socket)
    this.state.socket.emit('START_ROBOT',dataToSend)
  
    };
    */

  render() {

    return (
      <Button variant="contained" color="primary" onClick={this.props.clickFn}>
        {this.props.text}
      </Button>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(
  mapStateToProps,
  { }
)(BasicButton);

//