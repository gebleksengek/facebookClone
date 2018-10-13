import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class StoriesItem extends Component {
	render(){
		return(
			<View style={{ flex: 1, marginLeft: 3, marginRight: 3 }}>
				<Image
				 source={{ uri: this.props.storyImage }} 
				 style={{ borderRadius: 10, width: 125, height: 170 }}
				/>
				<View style={{ top: -80 }}>
					<View style={{ left: 40, position: 'absolute', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<Image
						 source={{ uri: this.props.profileImage}}
						 style={{ borderWidth: 2, borderColor: 'blue', borderRadius: 90, width: 40, height: 40 }}
						/>
						<Text style={{ color: 'white' }}>{this.props.name}</Text>
					 </View>
				</View>
			</View>
		);
	}
}