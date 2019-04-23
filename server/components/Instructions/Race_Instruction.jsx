import React from 'react'
import { connect } from 'react-redux'

class Race_Instruction extends React.Component {

	constructor(props) {
	    super(props);

	}

	render() {
		return (

			<div>
				Race
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
)(Race_Instruction);
