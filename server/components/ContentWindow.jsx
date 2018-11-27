import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SetupPage from './Pages/SetupPage'
import UserPage from './Pages/UserPage'
import VisualsPage from './Pages/VisualsPage'
import SettingsPage from './Pages/SettingsPage'

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
	    console.log(socketio);
	    this.props.setSocket(socketio)	   
	}

	componentWillUnmount () {
	    console.log('unmount')
	    this.props.socket.close()
	}

	handleMessage = (message) => {
	    console.log('Message Recieved: ' + message);
	    this.props.setParam('x', message)
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
				  this.state.content = <div style={this.state.style}> <SetupPage /> </div>
				  break;
			case 2:
				  this.state.content = <div style={this.state.style}> <VisualsPage /> </div>
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
 		socket: state.socket
 	}
}


export default connect(
  mapStateToProps,
  { setSocket,
  	setParam } //add importing action functions here
)(WindowContent);


