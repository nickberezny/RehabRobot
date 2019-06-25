import React from 'react'
import { connect } from 'react-redux'

class Race_Instruction extends React.Component {

	constructor(props) {
	    super(props);

	}

	render() {
		return (

			<div>
				Follow the desired trajectory. The closer you follow, the faster your player will move around the track.
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
