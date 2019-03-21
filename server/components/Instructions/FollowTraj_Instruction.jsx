import React from 'react'
import { connect } from 'react-redux'

class FollowTraj_Instruction extends React.Component {

	constructor(props) {
	    super(props);

	}

	render() {
		return (

			<div>
				Follow the trajectory displayed on screen as closely as possible. Points are earned by staying close
				to the desired point.
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
)(FollowTraj_Instruction);
