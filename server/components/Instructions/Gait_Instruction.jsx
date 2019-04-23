import React from 'react'
import { connect } from 'react-redux'

class Gait_Instruction extends React.Component {

	constructor(props) {
	    super(props);

	}

	render() {
		return (

			<div>
				Gait
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
)(Gait_Instruction);
