import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import HeaderTitle from '../components/HeaderTitle';
import Navigation from '../components/Navigation';
import NotivEarly from '../components/NotivEarly';
import NotivNew from '../components/NotivNew';

export default class NotivPage extends Component {
	render(){
		return(
			<View style={{ flex: 1, backgroundColor: '#DCDEE3' }}>
				<HeaderTitle placeholder='Search' />
				<Navigation />
				<ScrollView>
					<NotivEarly />
					<NotivNew />
				</ScrollView>
			</View>
		);
	}
}