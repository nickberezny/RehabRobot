import React from 'react'
import { connect } from 'react-redux'

import {runRobot} from '../../src/actions'
import SetButton from '../Generic/SetButton'
import RunButton from '../Generic/RunButton'
import InputText from '../Generic/InputText'
import Dropdown from '../Generic/Dropdown'

import FollowTraj from '../Setups/FollowTraj'
import FollowVel from '../Setups/FollowVel'
import Balance from '../Setups/Balance'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class SetupPage extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	content: null,
	    };  
	}

	render() {

		switch(this.state.props) {
			case 1: 
				this.state.contents = <div> <FollowTraj /> </div> 
				break;
			case 2:
				this.state.contents = <div> <FollowVel /> </div> 
				break;
			case 3:
				this.state.contents = <div> <Balance /> </div> 
				break;
			default: 
				this.state.contents = <div> Select a Game </div> 
		}



		return (

			<div>
			  	<Typography variant="display1" gutterBottom>
			    	Set Up a Session    
		      	</Typography>
		      	<div style={{padding: 24}}>
		      		<Dropdown text="Game" select1="Follow Trajectory" select2 = "Racing" select3 = "Balance" />
		      		{this.state.contents}
		      	</div>
		      	
		      	<div style={{padding: 12}}>
			      	<SetButton text="Set" />
			    </div>
			    <div style={{padding: 12}}>
			      	<RunButton text="Run" />
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
  	game: state.game
  }
}

export default connect(
  mapStateToProps,
  {}
)(SetupPage);
