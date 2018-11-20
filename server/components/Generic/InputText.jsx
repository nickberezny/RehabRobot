import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { setParam } from "../../src/actions";

class InputText extends React.Component {

	constructor(props) {
	    super(props);
	}

	onInputChange = (event) => {
        console.log("New parameter")
        let name = this.props.paramName
        this.props.setParam(name,event.target.value);
        
    }

	render() {
		return (
			<div>
	            <TextField
					id="TextInput"
					label={this.props.text}
					value={this.props.textValue}
					onChange={this.onInputChange}
					margin="normal"
		        />
		    </div>

		)
	}
}


function mapStateToProps(state) {
  return {
  }
}

export default connect(
  mapStateToProps,
  { setParam }
)(InputText);