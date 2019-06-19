import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { runRobot } from "../../src/actions";
import { setParam } from "../../src/actions";

import io from "socket.io-client";

class RunButton extends React.Component {
  
  constructor(props) {
    super(props);
    this.run = this.run.bind(this);
  }

  run() {

    //change this to send different data
    /*
    let dataToSend = 'SET_P' + this.props.P + '_D' + this.props.D + '_xdes' + this.props.xdes +
                     '_xmax' + this.props.xmax + '_vmax' + this.props.vmax +  
                     '_K' + this.props.K + '_B' + this.props.B +'_M' + this.props.M + '_GAME' + this.props.game + '_END';
    */

    let dataToSend = 'SET_exp' + this.props.exp + '_' + '_game' + this.props.game + '_'
    console.log(dataToSend)
    this.props.socket.emit('START_ROBOT', dataToSend)
  
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
    P: state.P,
    D: state.D,
    xdes: state.xdes,
    K: state.K,
    B: state.B,
    M: state.M,
    game: state.game,
    exp: state.exp

  }
}

export default connect(
  mapStateToProps,
  { runRobot,
    setParam }
)(RunButton);

//