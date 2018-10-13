import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'native-base';

export default class FriendList extends Component {	
	render(){
		return(
			<View>
				<Image
				 source={{ uri: this.props.image }} 
				 style={{ width: 120, height: 120}}
				/>
				<View style={{ paddingLeft: 5 }}>
					<Text style={{ color: 'black', fontWeight: 'bold' }}>{ this.props.name }</Text>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Icon
						 style={{ fontSize: 20, color: '#3578E5' }}
						 type='Entypo' 
						 name='dot-single' 
						/>
						<Text>{ this.props.posts } new posts</Text>
					</View>
				</View>
			</View>
		)
	}
}