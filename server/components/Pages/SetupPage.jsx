import React from 'react'
import { connect } from 'react-redux'

import {runRobot} from '../../src/actions'
import SetButton from '../Generic/SetButton'
import RunButton from '../Generic/RunButton'
import InputText from '../Generic/InputText'
import Dropdown from '../Generic/Dropdown'

import FollowTraj_Dev from '../Setups/FollowTraj_Dev'
import FollowVel_Dev from '../Setups/FollowVel_Dev'
import Balance_Dev from '../Setups/Balance_Dev'
import Gait_Dev from '../Setups/Gait_Dev'

import FollowTraj from '../Setups/FollowTraj'
import FollowVel from '../Setups/FollowVel'
import Balance from '../Setups/Balance'
import Gait from '../Setups/Gait'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class SetupPage extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	contents: null,
	    };  
	}

	render() {

		if(this.props.user == 1){
			switch(this.props.game) {
				case 1: 
					this.state.contents = <div> <FollowTraj_Dev /> </div> 
					break;
				case 2:
					this.state.contents = <div> <FollowVel_Dev /> </div> 
					break;
				case 3:
					this.state.contents = <div> <Balance_Dev /> </div> 
					break;
				case 4:
					this.state.contents = <div> <Gait_Dev /> </div> 
					break;
				default: 
					this.state.contents = <div> Select a Game </div> 
			}
		} 
		else if(this.props.user == 2){
			switch(this.props.game) {
				case 1: 
					this.state.contents = <div> <FollowTraj /> </div> 
					break;
				case 2:
					this.state.contents = <div> <FollowVel /> </div> 
					break;
				case 3:
					this.state.contents = <div> <Balance /> </div> 
					break;
				case 4:
					this.state.contents = <div> <Gait /> </div> 
					break;
				default: 
					this.state.contents = <div> Select a Game </div> 
			}
		}



		return (

			<div>
			  	<Typography variant="display1" gutterBottom>
			    	Set Up a Session    
		      	</Typography>
		      	<div style={{display: 'inline-flex'}}>
		      	<Dropdown text="Game" id="game" value={this.props.game} select1="Follow Trajectory" select2 = "Racing" select3 = "Balance" />
		      	{this.state.contents}
		      	<div>
			    <SetButton text="Set" />
			    </div>
				</div>
			</div>
	
		)
	}
}


function mapStateToProps(state) {
  return {
  	P: state.P,
  	D: state.D,
  	xdes: state.xdes,
  	K: state.K,
  	B: state.B,
  	M: state.M,
  	game: state.game,
  	user: state.user
  }
}

export default connect(
  mapStateToProps,
  {}
)(SetupPage);
