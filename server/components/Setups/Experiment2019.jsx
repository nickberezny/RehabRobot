import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SetButton from '../Generic/SetButton'
import RunButton from '../Generic/RunButton'
import HomeButton from '../Generic/HomeButton'
import Dropdown from '../Generic/Dropdown'
import Dropdown5 from '../Generic/Dropdown5'
import Dropdown6 from '../Generic/Dropdown6'

import InputText from '../Generic/InputText';
import { connect } from "react-redux";

class Experiment2019 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
        contents: null,
      };  
  }


  render() {

    if(this.props.exp == 3){
      this.state.contents = <Dropdown6 text="Game" id="game" value={this.props.game} select1 = "Assist" select2 = "Resist" select3 = "Cube" select4 = "Race" select5 = "Balance" select6 = "Block" />
    }

    return (
      <div style={{padding: 24}}>
        <Typography variant="display1" gutterBottom>
          Set Up a Session    
        </Typography>
        <Dropdown text="Experiment" id="exp" value={this.props.exp} select1="Experiment A" select2 = "Experiment B" select3 = "Practice" />
        <div>{this.state.contents}</div>
        <SetButton text="Set" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    exp: state.exp,
    game: state.game,
  }
}

export default connect(
  mapStateToProps,
  {}
)(Experiment2019);

//