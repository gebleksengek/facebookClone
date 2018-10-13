import React, { Component } from 'react';
import { View } from 'react-native';

import NotivHeader from './NotivHeader';
import NotivItem from './NotivItem';

export default class NotivNew extends Component {
	render(){
		return(
			<View>
				<NotivHeader text='New' />
				<NotivItem />
			</View>
		);
	}
}