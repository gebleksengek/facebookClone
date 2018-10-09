import React, { Component } from 'react';
import { View } from 'react-native';

import StatusItem from './StatusItem';

export default class Status extends Component {
	render(){
		return(
			<View style={{ backgroundColor: '#DCDEE3' }}>
				<StatusItem date='Oct 8 at 10:17am' total='55' />
				<StatusItem date='Oct 5 at 01:11pm' total='99' />
				<StatusItem date='Oct 4 at 09:30am' total='43' />
			</View>
		);
	}
}