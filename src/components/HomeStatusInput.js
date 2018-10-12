import React, { Component } from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { Icon } from 'native-base';

export default class HomeStatusInput extends Component {
	render(){
		return(
			<View style={{ padding: 10, justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white' }}>
				<View style={{ flex: 1 }}>
					<Image style={{ width: 50, height: 50, borderRadius: 90 }} source={require('../images/profile.jpg')} />
				</View>
				<View style={{ flex: 4, justifyContent: 'center' }}>
					<TextInput style={{ height: 35, borderColor: '#4E5665', borderWidth: 1, borderRadius: 100 }} placeholder="What's on your mind?" />
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
					<Icon style={{ fontSize: 20,color: '#4E5665' }} type='Entypo' name='camera' />
					<Text>Photo</Text>
				</View>
			</View>
		)
	}
}