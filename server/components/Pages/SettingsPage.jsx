import React from 'react'
import { connect } from 'react-redux'

import {setUser} from '../../src/actions'


class SettingsPage extends React.Component {

	constructor(props) {
	    super(props);
	}

	handleChange = event => {
		this.props.setUser(event.target.value);
	}

	render() {
		return (
			<FormControl component="fieldset" className={classes.formControl}>
	          <FormLabel component="legend">User Setting</FormLabel>
	          <RadioGroup
	            aria-label="User"
	            name="user1"
	            value={this.state.value}
	            onChange={this.handleChange}
	          >
	            <FormControlLabel value=1 control={<Radio />} label="Developer" />
	            <FormControlLabel value=2 control={<Radio />} label="User" />
	          </RadioGroup>
	        </FormControl>
		)
	}
}


function mapStateToProps(state) {
  return {
  	value: state.user
  }
}

export default connect(
  mapStateToProps,
  { setUser }
)(SettingsPage);
