import React from 'react';
import Button from '@material-ui/core/Button';

import InputText from '../Generic/InputText';
import { connect } from "react-redux";

class FollowTraj extends React.Component {
  
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div> 
        <InputText text="Max Velocity" textValue={this.props.vmax} paramName='vmax' />
        <InputText text="Max Position" textValue={this.props.xmax} paramName='xmax' />
        <InputText text="Stiffness" textValue={this.props.K} paramName='K' />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    P: state.P,
    D: state.D,
    xmax: state.xmax,
    vmax: state.vmax,
    K: state.K,
    B: state.B,
    M: state.M,
  }
}

export default connect(
  mapStateToProps,
  {}
)(FollowTraj);

//