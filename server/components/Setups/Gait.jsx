import React from 'react';
import Button from '@material-ui/core/Button';

import InputText from '../Generic/InputText';
import { connect } from "react-redux";

class Gait extends React.Component {
  
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div> 
        <InputText text="Assistance Stiffness" textValue={this.props.k_assist} paramName='k_assist' />
        <InputText text="Floor Stiffness" textValue={this.props.k_floor} paramName='k_floor' />
        <InputText text="Gravity Stiffness" textValue={this.props.k_gravity} paramName='k_gravity' />
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
    k_assist: state.k_assist,
    k_floor: state.k_floor,
    k_gravity: state.k_gravity,
    B: state.B,
    M: state.M,
  }
}

export default connect(
  mapStateToProps,
  {}
)(Gait);

//