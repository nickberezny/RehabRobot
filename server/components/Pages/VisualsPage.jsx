import React from 'react'
import { connect } from 'react-redux'

import Scene from '../../games/basic'
import Follow_traj from '../../games/bar_with_game'

class VisualsPage extends React.Component {

	constructor(props) {
	    super(props);
	}

	render() {
		return (

			<div>
				<Follow_traj />
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
)(VisualsPage);
