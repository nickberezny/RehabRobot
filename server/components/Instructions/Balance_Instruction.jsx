import React from 'react'
import { connect } from 'react-redux'

class Balance_Instruction extends React.Component {

	constructor(props) {
	    super(props);

	}

	render() {
		return (

			<div>
				Keep your player (BLUE) on the column. Disturbances will be launched from the left or right (ORANGE). Push the diturbances out of the arena by applying force. 
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
)(Balance_Instruction);
