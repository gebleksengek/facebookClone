import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Icon } from 'native-base';

export default class FriendHeader extends Component {
	render(){
		return(
			<View style={{ padding: 7, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
				<View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
					<Image
					 source={require('../images/friends.jpg')}
					 style={{ width: 25, height: 25 }}
					/>
					<Text style={{ color: 'black', fontSize: 17, paddingLeft: 7, fontWeight: 'bold' }}>Friends </Text>
					<Icon style={{ fontSize: 20,color: '#4E5665' }} type='Entypo' name='dot-single' />
					<Text> {this.props.total}</Text>
				</View>
				<Text style={{ color: '#3578E5' }}>FIND FRIENDS</Text>
			</View>
		);
	}
}