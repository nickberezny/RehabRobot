import React from 'react'
import { connect } from 'react-redux'

import RunRobot from '../../src/actions'
import Button from '../Generic/Button'

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

		      	<Button text="Run" clickFn = {RunRobot} />


			</div>

		)
	}
}


function mapStateToProps(state) {
  return {}
}

export default connect(
  mapStateToProps,
  {}
)(SetupPage);
