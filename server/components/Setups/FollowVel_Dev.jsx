import React from 'react';
import Button from '@material-ui/core/Button';

import InputText from '../Generic/InputText';
import { connect } from "react-redux";

class FollowVel_Dev extends React.Component {
  
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div> 
        <InputText text="Desired Velocity" textValue={this.props.vmax} paramName='vmax' />
        <InputText text="Max Position" textValue={this.props.xmax} paramName='xmax' />
        <InputText text="Admittance K" textValue={this.props.K} paramName='K' />
        <InputText text="Admittance B" textValue={this.props.B} paramName='B' />
        <InputText text="Admittance M" textValue={this.props.M} paramName='M' />
        <InputText text="P Gain" textValue={this.props.P} paramName='P' />
        <InputText text="D Gain" textValue={this.props.D} paramName='D' />
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
)(FollowVel_Dev);

//