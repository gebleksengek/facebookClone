import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class HomeStatusInput extends Component {
	render(){
		return(
			<View style={ styles.container }>
				<View style={{ flex: 1 }}>
					<Image
					 style={{ width: 50, height: 50, borderRadius: 90 }} 
					 source={require('../images/profile.jpg')} 
					/>
				</View>
				<View style={{ flex: 4, justifyContent: 'center' }}>
					<TextInput
					 style={ styles.textInput }
					 placeholder="What's on your mind?"
					/>
				</View>
				<View style={ styles.rightIcon }>
					<Icon
					 style={{ fontSize: 20,color: '#4E5665' }} 
					 type='Entypo' 
					 name='camera' 
					/>
					<Text>Photo</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10, 
		justifyContent: 'space-between', 
		flexDirection: 'row', 
		backgroundColor: 'white'
	},
	textInput: {
		height: 35, 
		borderColor: '#4E5665', 
		borderWidth: 1, 
		borderRadius: 100
	},
	rightIcon: {
		justifyContent: 'center', 
		alignItems: 'center', 
		flex: 1
	}
})