import React from 'react'
import { connect } from 'react-redux'

import {runRobot} from '../../src/actions'
import SetButton from '../Generic/SetButton'
import RunButton from '../Generic/RunButton'
import InputText from '../Generic/InputText'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class SetupPage extends React.Component {

	constructor(props) {
	    super(props);  
	}

	render() {
		return (

			<div>
			  	<Typography variant="display1" gutterBottom>
			    	Set Up a Session    
		      	</Typography>
		      	<div style={{padding: 24}}>
		      		<InputText text="P Gain" textValue={this.props.P} paramName='P' />
		      		<InputText text="D Gain" textValue={this.props.D} paramName='D' />
		      		<InputText text="X Desired" textValue={this.props.xdes} paramName='xdes' />
		      	</div>
		      	
		      	<div style={{padding: 24}}>
			      	<SetButton text="Set" />
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
  }
}

export default connect(
  mapStateToProps,
  {}
)(SetupPage);
