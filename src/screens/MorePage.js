import React, { Component } from 'react';
import { View, Text } from 'react-native';

import HeaderTitle from '../components/HeaderTitle';
import Navigation from '../components/Navigation';

export default class MorePage extends Component {
	render(){
		return(
			<View style={{ flex: 1, backgroundColor: '#DCDEE3' }}>
				<HeaderTitle placeholder='Search' />
				<Navigation />
				<Text>More Page</Text>
			</View>
		);
	}
}