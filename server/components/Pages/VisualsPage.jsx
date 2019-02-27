import React from 'react'
import { connect } from 'react-redux'

import Basic from '../../games/basic'
import BarGame from '../../games/bar_with_game'
import Follow_traj from '../../games/follow_traj'

class VisualsPage extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	content: null
	    }
	}

	render() {

		switch(this.props.game) {
			case 1: 
				this.state.content = <BarGame />
				break; 
			case 2: 
				this.state.content = <Basic />
				break; 
			case 3: 
				this.state.content = <Follow_traj />
				break; 
			default: 
				<div> Game load failed </div>
			}

		return (

			<div>
				{this.state.content}
			</div>

		)
	}
}


function mapStateToProps(state) {
  return {
  	game: state.game,
  }
}

export default connect(
  mapStateToProps,
  {}
)(VisualsPage);
