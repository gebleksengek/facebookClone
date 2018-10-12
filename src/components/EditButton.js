import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class EditButton extends Component {
	render(){
		return(
			<View style={ styles.viewEditButton }>
            	<Text style={{ color: '#4267B2' }}>{this.props.text}</Text>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	viewEditButton: {
		marginTop: 5, 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center'
	}
})