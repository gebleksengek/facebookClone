import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class StatusReactButton extends Component {
	render(){
		return(
			<View style={ styles.container }>
				<View style={ styles.reactButton }>
					<Icon
					 style={{ fontSize: 23, color: '#3578E5' }} 
					 type='FontAwesome' 
					 name='thumbs-up' 
					/>
					<Text style={{ fontWeight: 'bold', color: '#3578E5'}} > Like</Text>
				</View>
				<View style={ styles.reactButton }>
					<Icon
					 style={{ fontSize: 23, color: '#4E5665' }} 
					 type='Octicons' 
					 name='comment'
					/>
					<Text style={{ fontWeight: 'bold' }}> Comment</Text>
				</View>
				<View style={ styles.reactButton }>
					<Icon
					 style={{ fontSize: 23, color: '#4E5665' }} 
					 type='MaterialCommunityIcons' 
					 name='share' 
					/>
					<Text style={{ fontWeight: 'bold' }}> Share</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		 flex: 1, 
		 flexDirection: 'row', 
		 marginRight: 10, 
		 marginLeft: 10 , 
		 justifyContent: 'space-between', 
		 borderTopWidth: 1, 
		 borderTopColor: '#4E5665', 
		 paddingLeft: 30, 
		 paddingRight: 30 
	},
	reactButton: {
		alignItems: 'center', 
		flexDirection: 'row',
		height: 40
	}
})