import React from 'react'
import { connect } from 'react-redux'

import {runRobot} from '../../src/actions'
import SetButton from '../Generic/SetButton'
import RunButton from '../Generic/RunButton'
import InputText from '../Generic/InputText'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class BasicSetupPage extends React.Component {

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
		      		<InputText text="Resistance Level" textValue={this.props.P} paramName='P' />
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
  	M: state.M
  }
}

export default connect(
  mapStateToProps,
  {}
)(BasicSetupPage);
