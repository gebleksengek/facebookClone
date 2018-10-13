import React, { Component } from 'react';
import { View } from 'react-native';

import NotivHeader from './NotivHeader';
import NotivItem from './NotivItem';

export default class NotivEarly extends Component {
	render(){
		return(
			<View style={{ backgroundColor: 'white' }}>
				<NotivHeader text='Early' />
				<NotivItem />
			</View>
		);
	}
}