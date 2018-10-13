import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class NotivHeader extends Component {
	render(){
		return(
			<View style={ styles.container }>
				<Text style={ styles.text }>{ this.props.text }</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 7,
		padding: 7,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	text: {
		color: 'black',
		fontWeight: 'bold'
	}
});