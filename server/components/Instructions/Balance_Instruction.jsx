import React from 'react'
import { connect } from 'react-redux'

class Balance_Instruction extends React.Component {

	constructor(props) {
	    super(props);

	}

	render() {
		return (

			<div>
				Move at the desired velocity as closely as possible. The display bar will rise if you are moving too fast, a
				and will lower if you are going too slow.
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
