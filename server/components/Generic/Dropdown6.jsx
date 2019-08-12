import React from 'react'
import { connect } from 'react-redux'

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import { setValue } from "../../src/actions";

class Dropdown6 extends React.Component {

	constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.setValue(this.props.id, event.target.value)
	}

	render() {
		return (
			<div style={{padding: 12}}>
			<FormControl>
	          <InputLabel>{this.props.text}</InputLabel>
	          <Select
	            value={this.props.value}
	            onChange={this.handleChange}
	          >
	            <MenuItem value="">
	              <em>None</em>
	            </MenuItem>
	            <MenuItem value={1}>{this.props.select1}</MenuItem>
	            <MenuItem value={2}>{this.props.select2}</MenuItem>
	            <MenuItem value={3}>{this.props.select3}</MenuItem>
	            <MenuItem value={4}>{this.props.select4}</MenuItem>
	            <MenuItem value={5}>{this.props.select5}</MenuItem>
	            <MenuItem value={6}>{this.props.select6}</MenuItem>
	          </Select>
	        </FormControl>
	        </div>
		)
	}
}


function mapStateToProps(state) {
  return {
  	game: state.game
  }
}

export default connect(
  mapStateToProps,
  {setValue}
)(Dropdown6);
