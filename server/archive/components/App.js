import React from 'react'
import TopbarCont from '../containers/TopbarCont'
import DrawerCont from '../containers/DrawerCont'
import ContentCont from '../containers/ContentCont'
import SocketCont from '../containers/socketCont'

import Websocket from 'react-websocket';

const App = () => (
	<div>
		<DrawerCont />
		<TopbarCont />
		<br/><br/><br/><br/>
		<ContentCont />
	</div>
)

export default App

