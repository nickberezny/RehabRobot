import React from 'react'
import Scene from '../src/games/basic'
import { withStyles } from '@material-ui/core/styles';
import Dropdown from './Dropdown'
import InputK from './InputK'
import InputB from './InputB'
import RunButton from './RunButton'
import Typography from '@material-ui/core/Typography';




const MainContent = ({menuOpen, pageNum}) => {

	var style = {}

	if(menuOpen) {
		style = {
			transition: 'marginLeft 6',
			marginLeft: 255 ,
			padding: 20
			
		}
	
	}else{
		style = {
			transition: 'marginLeft 6',
			marginLeft: 0,
			padding: 20
		}
	}

	switch(pageNum) {
		case 1:
			return(
			  <div style={style}>
			  	<Typography variant="display1" gutterBottom>
			    	Set Up a Session    
		      	</Typography>
		      	<br/>
			  	<Dropdown />
			  	<br/>
			  	<InputK/>
			  	<br/>
			  	<InputB/>
			  	<br/>
			  	<RunButton/>
			  </div>
	  		)

		case 2:
			return(
			  <div style={style}>
			  	<Scene />
			  </div>
			)

		default:
			return(
			  <div style={style}>
			  	Failed
			  </div>
			)
	}
}


export default MainContent
