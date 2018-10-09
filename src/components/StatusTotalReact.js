import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class StatusTotalReact extends Component {
	render(){
		return(
			<View style={{ marginLeft: 20, marginRight: 20, paddingBottom: 10, paddingTop: 10, flexDirection: 'row' }}>
				<Image
				 source={require('../images/like.png')}
				 style={{ width: 20, height: 20}}
				/>
				<Text>You, and {this.props.total} others</Text>
			</View>
		);
	}
}