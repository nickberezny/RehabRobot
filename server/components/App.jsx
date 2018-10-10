import React from 'react'
import { connect } from 'react-redux'

import DrawerMenu from './Drawer'
/*
import TopbarCont from '../containers/TopbarCont'
import ContentCont from '../containers/ContentCont'
import SocketCont from '../containers/socketCont'

<TopbarCont />
<br/><br/><br/><br/>
<ContentCont />
				
*/

import Websocket from 'react-websocket';

class App extends React.Component {

	constructor(props) {
	    super(props);
	}

	render() {
		return (
			<div>
				<DrawerMenu />
				Hi
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
)(App);


