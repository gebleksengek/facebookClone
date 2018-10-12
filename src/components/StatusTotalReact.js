import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class StatusTotalReact extends Component {
	render(){
		return(
			<View style={ styles.container }>
				<Image
				 source={require('../images/like.png')}
				 style={{ width: 20, height: 20}}
				/>
				<Text>You, and {this.props.total} others</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 20, 
		marginRight: 20, 
		paddingBottom: 10, 
		paddingTop: 10, 
		flexDirection: 'row' 
	}
})