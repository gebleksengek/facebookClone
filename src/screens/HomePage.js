import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import HeaderTitle from '../components/HeaderTitle';
import HomeStatusInput from '../components/HomeStatusInput';
import Stories from '../components/Stories';
import Status from '../components/Status';
import Navigation from '../components/Navigation';

export default class HomePage extends Component {
	render(){
		return(
			<View style={{ flex: 1, backgroundColor: '#DCDEE3' }}>
				<HeaderTitle placeholder='Search' />
				<Navigation />
				<ScrollView>
					<HomeStatusInput />
					<Stories />
					<Status />
				</ScrollView>	
			</View>
		);
	}
}