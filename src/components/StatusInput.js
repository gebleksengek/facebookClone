import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Item } from 'native-base';

export default class StatusInput extends Component {
	render(){
		return(
			<View style={{ backgroundColor: '#DCDEE3', paddingTop: 10, paddingBottom: 10, flex: 1 }}>
				<View style={{ backgroundColor: 'white' }}>
					<Item>
						<Image
						 source={require('../images/profile.jpg')}
						 style={{ margin: 10, width: 50, height: 50, borderRadius: 90 }}
						/>
						<Text>What's on your mind?</Text>
					</Item>
					<View style={{ paddingTop: 10, paddingBottom: 10, paddingRight: 30, paddingLeft: 30, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
							<Image
							 style={{ width: 20, height: 20 }}
							 source={require('../images/status.jpg')}
							/>
							<Text> Status</Text>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
							<Image
							 style={{ width: 20, height: 20 }}
							 source={require('../images/photo.jpg')}
							/>
							<Text> Photo</Text>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
							<Image
							 style={{ width: 20, height: 20 }}
							 source={require('../images/lifeEvent.jpg')}
							/>
							<Text> Life Event</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}