import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import EditButton from './EditButton';
import MoreInfo from './MoreInfo';

export default class GalleryProfileIntor extends Component {
	render(){
		return(
			<View style={{ marginTop: 5, flex: 1, flexDirection: 'column' }}>
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
					<Image
					 source={require('../images/image1.jpg')}
					 style={{ width: 123, height: 123}}
					/>
					<Image
					 source={require('../images/image2.jpg')}
					 style={{ width: 123, height: 123}}
					/>
					<Image
					 source={require('../images/image3.jpg')}
					 style={{ width: 123, height: 123}}
					/>
				</View>
				<View style={{ marginTop: 5, flex: 1, flexDirection: 'row' }}>
					<Image
					 source={require('../images/image4.jpg')}
					 style={{ marginRight: 7, width: 123, height: 123}}
					/>
					<Image
					 source={require('../images/image5.jpg')}
					 style={{ width: 123, height: 123}}
					/>
				</View>
				<EditButton text='EDIT FEATURED' />
				<MoreInfo text='www.facebook.com' iconType='Feather' iconName='globe' />
				<MoreInfo text='www.com' iconType='Feather' iconName='globe' />
				<View style={{ backgroundColor: '#F6F7F8', marginTop: 10, paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 50, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
					<Text style={{ fontSize: 15, fontWeight: 'bold' }}>ABOUT</Text>
					<Text style={{ fontSize: 15, fontWeight: 'bold' }}>PHOTOS</Text>
					<Text style={{ fontSize: 15, fontWeight: 'bold' }}>FRIENDS</Text>
				</View>
			</View>
		);
	}
}