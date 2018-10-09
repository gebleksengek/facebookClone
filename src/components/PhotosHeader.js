import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class PhotosHeader extends Component {
	render(){
		return(
			<View style={{ padding: 7, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
				<View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
					<Image
					 source={require('../images/photos.jpg')}
					 style={{ width: 25, height: 25 }}
					/>
					<Text style={{ color: 'black', fontSize: 17, paddingLeft: 7, fontWeight: 'bold' }}>Photos</Text>
				</View>
				<Text style={{ color: '#3578E5' }}>ADD PHOTO</Text>
			</View>
		);
	}
}