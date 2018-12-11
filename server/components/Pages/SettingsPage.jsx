import React from 'react'
import { connect } from 'react-redux'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

import {setUser} from '../../src/actions'


class SettingsPage extends React.Component {

	constructor(props) {
	    super(props);
	}

	handleChange = event => {
		console.log(parseInt(event.target.value))
		this.props.setUser(parseInt(event.target.value));
	}

	render() {
		return (
			<FormControl component="fieldset" >
	          <FormLabel component="legend">User Setting</FormLabel>
	          <RadioGroup
	            aria-label="User"
	            name="user1"
	            value={this.props.u_value}
	            onChange={this.handleChange}
	          >
	            <FormControlLabel value="1" control={<Radio color="secondary" />} label="Developer" />
	            <FormControlLabel value="2" control={<Radio color="secondary" />} label="User" />
	          </RadioGroup>
	        </FormControl>
		)
	}
}


function mapStateToProps(state) {
  return {
  	u_value: state.user.toString()
  }
}

export default connect(
  mapStateToProps,
  { setUser }
)(SettingsPage);
