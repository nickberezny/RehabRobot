import React from 'react';
import Button from '@material-ui/core/Button';

import SetButton from '../Generic/SetButton'
import RunButton from '../Generic/RunButton'
import HomeButton from '../Generic/HomeButton'

import InputText from '../Generic/InputText';
import { connect } from "react-redux";

class Experiment2019 extends React.Component {
  
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Set Up a Session    
        </Typography>
        <Dropdown text="Experiment" id="exp" value={this.props.exp} select1="Expirment A" select2 = "Expirment B" select3 = "Expirment C" />
        <SetButton text="Set" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    exp: state.exp,
  }
}

export default connect(
  mapStateToProps,
  {}
)(Experiment2019);

//