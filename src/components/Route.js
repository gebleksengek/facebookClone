import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomePage from '../screens/HomePage';
import StorePage from '../screens/StorePage';
import ProfilePage from '../screens/ProfilePage';
import NotivPage from '../screens/NotivPage';
import MorePage from '../screens/MorePage';

export default class Route extends Component {
	render(){
		return(
			<Router>
				<Scene key='tabbar' headerMode='none' swipeEnabled={true} hideTabBar={true}>
					<Scene key='home' headerMode='none' component={HomePage} title='Home' initial />
					<Scene key='store' headerMode='none' component={StorePage} title='Store' />
					<Scene key='profile' headerMode='none' component={ProfilePage} title='Profile' />
					<Scene key='notiv' headerMode='none' component={NotivPage} title='Notiv' />
					<Scene key='more' headerMode='none' component={MorePage} title='More' />
		  		</Scene>
		  	</Router>
		)
	}
}