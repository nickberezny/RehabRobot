import React from 'react'
import { connect } from 'react-redux'

import Basic from '../../games/basic'
import BarGame from '../../games/bar_with_game'
import Follow_traj from '../../games/follow_traj'
import RaceGame from '../../games/race_game'
import RunButton from '../Generic/RunButton'
import HomeButton from '../Generic/HomeButton'
import FollowTraj_Instruction from '../Instructions/FollowTraj_Instruction'

class VisualsPage extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	content: null
	    }
	}

	render() {

		if(this.props.run){
			switch(this.props.game) {
				case 1: 
					this.state.content = <div><BarGame /><HomeButton text="Home" />
				<RunButton text="Run" /></div>
					break; 
				case 2: 
					this.state.content = <RaceGame />
					break; 
				case 3: 
					this.state.content = <Follow_traj />
					break; 
				case 4: 
					this.state.content = <Follow_traj />
					break; 
				default: 
					<div> Game load failed </div>
				}
			}
			else
			{
				switch(this.props.game) {
				case 1: 
					this.state.content = <div><FollowTraj_Instruction /><HomeButton text="Home" />
				<RunButton text="Run" /></div>
					break; 
				case 2: 
					this.state.content = <div><RaceGame /> <RunButton /></div>
					break; 
				case 3: 
					this.state.content = <div><Follow_traj />  <RunButton /></div>
					break; 
				case 4: 
					this.state.content = <div><Follow_traj />  <RunButton /></div>
					break; 
				default: 
					<div> Game load failed </div>
				}
				
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
  	run: state.run,
  }
}

export default connect(
  mapStateToProps,
  {}
)(VisualsPage);
