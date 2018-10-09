import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

export default class StatusContent extends Component {
	render(){
		return(
			<View>
				<Text style={{ color: 'black', marginLeft: 10, margin: 5 }}>Nambah portofolio</Text>
				<Image
				 source={require('../images/image1.jpg')}
				 style={{ width: Dimensions.get('window').width, height: 200 }}
				/>
			</View>
		);
	}
}