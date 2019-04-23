import React from 'react'
import { connect } from 'react-redux'


import Follow_traj from '../../games/Follow_traj'
import Follow_vel from '../../games/Follow_vel'
import Race_game from '../../games/Race_game'
import Balance_game from '../../games/Balance_game'
import Gait_game from '../../games/Gait_game'

import FollowTraj_Instruction from '../Instructions/FollowTraj_Instruction'
import FollowVel_Instruction from '../Instructions/FollowVel_Instruction'

import RunButton from '../Generic/RunButton'
import HomeButton from '../Generic/HomeButton'

import { setParam } from "../../src/actions";


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
							<Follow_vel />
							<div><HomeButton text="Home" /><RunButton text="Run" /></div>
						</div>
					break; 
				case 3: 
					this.state.content = 
						<div>
							<Race_game />
							<div><HomeButton text="Home" /><RunButton text="Run" /></div>
						</div>
					break; 
				case 4: 
					this.state.content = 
						<div>
							<Balance_game />
							<div><HomeButton text="Home" /><RunButton text="Run" /></div>
						</div>
					break; 
				case 5:
					this.state.content = 
						<div>
							<Gait_game />
							<div><HomeButton text="Home" /><RunButton text="Run" /></div>
						</div>
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
  { setParam }
)(VisualsPage);
