import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PhotosHeader extends Component {
	render(){
		return(
			<View style={ styles.container }>
				<View style={ styles.leftHeader }>
					<Image
					 source={require('../images/photos.jpg')}
					 style={{ width: 25, height: 25 }}
					/>
					<Text style={ styles.leftHeaderText }>Photos</Text>
				</View>
				<Text style={{ color: '#3578E5' }}>ADD PHOTO</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 7, 
		flex: 1, 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center'
	},
	leftHeader: {
		alignItems: 'center',
		flex: 1, 
		flexDirection: 'row'
	},
	leftHeaderText: {
		color: 'black', 
		fontSize: 17, 
		paddingLeft: 7, 
		fontWeight: 'bold' 
	}
})