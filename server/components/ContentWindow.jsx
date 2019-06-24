import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SetupPage from './Pages/SetupPage'
import UserPage from './Pages/UserPage'
import VisualsPage from './Pages/VisualsPage'
import SettingsPage from './Pages/SettingsPage'
import BasicSetupPage from './Pages/BasicSetupPage'
import Experiment2019 from './Setups/Experiment2019'

import io from "socket.io-client";
import { setSocket } from "../src/actions";
import { setParam } from "../src/actions";

let WIRELESS = 1

class WindowContent extends React.Component {

	constructor(props) {

	    super(props);

	    this.state = { 
	    	content: null,
	    	style: null,
	    };
	}

	componentDidMount() {
	    var socketio = io();
	    socketio.on('message', this.handleMessage) 
	    socketio.on('END_STAGE', this.handleEndStage) 
	    console.log(socketio);
	    this.props.setSocket(socketio)	   
	}

	componentWillUnmount () {
	    console.log('unmount')
	    this.props.socket.close()
	}

	handleMessage = (message) => {
	    console.log('Message Recieved: ' + message);
	    var res = message.split(",");
	    this.props.setParam('x', res[0])
	    this.props.setParam('xdes', res[1])
	    this.props.setParam('v', res[2])
	    this.props.setParam('vdes', res[3])
	    this.props.setParam('x_ball', res[4])
	    this.props.setParam('x_end', res[5])

	    if(this.props.exp == 2) this.props.setParam('game', 3)
	}

	handleEndStage = (message) => {
		console.log('Stage Ended')

		this.props.setParam('stage', this.props.stage + 1)
		this.props.setParam('run', 0)

		this.props.setParam('xdes', 0.0)
		this.props.setParam('x', 0.0)

		switch(this.props.exp){
			case 1:
				//assist/resist ranges (exp 1)
				//if(this.props.stage > 5) {this.props.setParam('game', 2)}
				break;
			case 2:
				//games vs no games (exp 2)
				switch(this.props.stage){
					case 1:
						this.props.setParam('game', 3)
						break;
					case 2:
						this.props.setParam('game', 2)
						break;
					case 3:
						this.props.setParam('game', 3)
						break;
					case 4:
						this.props.setParam('game', 4)
						break;
					case 5:
						this.props.setParam('game', 5)
						break;
				}
			case 3:
				//practice run
				//this.props.setParam('game', this.props.game + 2)
				break;
			break;
		}
	}

	render() {

		if(this.props.menuOpen) {
	    	this.state.style = {
				transition: 'marginLeft 6',
				marginLeft: 255 ,
				padding: 20
			}
		}else{
			this.state.style = {
				transition: 'marginLeft 6',
				marginLeft: 0,
				padding: 20
			}
		}

		switch(this.props.activePage) {
			case 1:
				  if(this.props.user == 1) {this.state.content = <div style={this.state.style}> <SetupPage /> </div>}
				  if(this.props.user == 2) {this.state.content = <div style={this.state.style}> <SetupPage /> </div>}
				  if(this.props.user == 3) {this.state.content = <div style={this.state.style}> <Experiment2019 /> </div>}
				  break;
			case 2:
				  this.state.content = <div style={this.state.style}> <VisualsPage /> </div>
				  break;
			case 3:
				this.state.content = <div style={this.state.style}> <SettingsPage /> </div>
				break;
			default:
				  this.state.content = <div style={this.state.style}> Page Load Failed </div>		
		}

		return (
			<div>
				{this.state.content}
			</div>
		)
	}
}


function mapStateToProps(state) {
	
	//map state variables to the component's state 
 	return {
 		activePage: state.activePage,
 		menuOpen: state.menuOpen,
 		socket: state.socket,
 		user: state.user ,
 		stage: state.stage,
 		exp: state.exp,
 		game: state.game,
 	}
}


export default connect(
  mapStateToProps,
  { setSocket,
  	setParam } //add importing action functions here
)(WindowContent);


