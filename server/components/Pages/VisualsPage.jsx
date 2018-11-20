import React from 'react'
import { connect } from 'react-redux'

import Scene from '../../games/basic'

class VisualsPage extends React.Component {

	constructor(props) {
	    super(props);
	}

	render() {
		return (

			<div>
				<Scene />
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
