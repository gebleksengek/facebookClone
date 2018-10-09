import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class EditButton extends Component {
	render(){
		return(
			<View style={{ marginTop: 5, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            	<Text style={{ color: '#4267B2' }}>{this.props.text}</Text>
            </View>
		);
	}
}