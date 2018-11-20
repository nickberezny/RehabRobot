import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from "redux";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import rootReducer from "../src/reducers.js";
import App from "../components/App"

const store = createStore(rootReducer);

export default class extends React.Component {
	render(){
		return(
			<Provider store={store}>
			    <App />
			</Provider>
		);
	}
}
  
