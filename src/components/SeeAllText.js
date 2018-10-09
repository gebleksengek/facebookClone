import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SeeAllText extends Component {
	render(){
		return(
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
				<Text>See All {this.props.text} ></Text>
			</View>
		);
	}
}