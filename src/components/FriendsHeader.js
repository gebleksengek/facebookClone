import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class FriendHeader extends Component {
	render(){
		return(
			<View style={ styles.container }>
				<View style={ styles.leftHeader }>
					<Image
					 source={ require('../images/friends.jpg') }
					 style={{ width: 25, height: 25 }}
					/>
					<Text style={ styles.rightHeader }>Friends </Text>
					<Icon
					 style={{ fontSize: 20,color: '#4E5665' }} 
					 type='Entypo' 
					 name='dot-single'
					/>
					<Text> {this.props.total}</Text>
				</View>
				<Text style={{ color: '#3578E5' }}>FIND FRIENDS</Text>
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
	rightHeader: {
		color: 'black', 
		fontSize: 17, 
		paddingLeft: 7, 
		fontWeight: 'bold'
	}
})