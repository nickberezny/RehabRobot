import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setParam } from "../src/actions";
//OBJLoader(THREE);

import RunButton from '../components/Generic/RunButton'

//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair.png")
//require("/home/rehab/Documents/RehabRobot/server/games/sprite/crosshair_yellow.png" );

class Test_timer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  
    this.timerID = setInterval(
      () => this.tick(),
      50
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.props.setParam('x',this.props.x + 3);
    this.props.setParam('xdes',this.props.xdes + 3);
  }

  render() {
    return (
      <div>
        Test Timer Active
      </div>
    )
  }
}

function mapStateToProps(state) {
  
  //map state variables to the component's state 
  return {
    x: state.x,
    xdes: state.xdes
  }
}


export default connect(
  mapStateToProps,
  {setParam} //add importing action functions here
)(Test_timer);