import React from 'react'
import { connect } from 'react-redux'


import Follow_traj from '../../games/bar_with_game'
import Vel_traj from '../../games/vel_traj'

import RunButton from '../Generic/RunButton'
import HomeButton from '../Generic/HomeButton'

import FollowTraj_Instruction from '../Instructions/FollowTraj_Instruction'
import FollowVel_Instruction from '../Instructions/FollowVel_Instruction'

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
					this.state.content = 
						<div>
							<Follow_traj />
							<div><HomeButton text="Home" /><RunButton text="Run" /></div>
						</div>
					break; 
				case 2: 
					this.state.content = 
						<div>
							<Vel_traj />
							<div><HomeButton text="Home" /><RunButton text="Run" /></div>
						
						</div>
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
					this.state.content = 
						<div>
							<FollowTraj_Instruction />
							<div><HomeButton text="Home" /><RunButton text="Run" /></div>
						</div>
					break; 
				case 2: 
					this.state.content = 
						<div>
							<FollowVel_Instruction />
							<div><HomeButton text="Home" /><RunButton text="Run" /></div>
						</div>
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
  	stage: state.stage,
  }
}

export default connect(
  mapStateToProps,
  {}
)(VisualsPage);
