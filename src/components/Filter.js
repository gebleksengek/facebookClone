import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default class Filter extends Component {
	render(){
		return(
			<View style={{ backgroundColor: '#DCDEE3' }}>
				<View style={ styles.viewAddAnswer }>
					<View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
						<Image
							 source={require('../images/youKnow.jpg')}
							 style={{ width: 25, height: 25 }}
							/>
						<Text style={ styles.didYouKnow }>Did You Know</Text>
					</View>
					<Text style={{ color: '#3578E5' }}>ADD ANSWER</Text>
				</View>
				<View style={ styles.viewFilterButton }>
					<TouchableOpacity style={ styles.filterButton }>
						<Icon type='FontAwesome' name='sliders' style={{ fontSize: 20, color: '#4E5665' }} />
						<Text> FILTERS</Text>
					</TouchableOpacity>
					<Text style={{ color: '#3578E5' }}>MANAGE POSTS</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewAddAnswer: {
		backgroundColor: 'white', 
		marginBottom: 10, 
		padding: 7, 
		flex: 1, 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center'
	},
	didYouKnow: {
		color: 'black', 
		fontSize: 17, 
		paddingLeft: 7, 
		fontWeight: 'bold'
	},
	viewFilterButton: {
		backgroundColor: 'white', 
		padding: 7, 
		flex: 1, 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center'
	},
	filterButton: {
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		padding: 5
	}
})