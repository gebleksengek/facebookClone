import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

export default class StatusContent extends Component {
	render(){
		return(
			<View>
				<Text style={{ color: 'black', marginLeft: 10, margin: 5 }}>{this.props.text}</Text>
				<Image
				 source={{ uri: this.props.image }}
				 style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width }}
				/>
			</View>
		);
	}
}