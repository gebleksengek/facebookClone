import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SeeAllText extends Component {
	render(){
		return(
			<View style={ styles.container }>
				<Text>See All {this.props.text} ></Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center', 
		justifyContent: 'center', 
		flex: 1, 
		flexDirection: 'row', 
		paddingTop: 10, 
		paddingBottom: 10
	}
})