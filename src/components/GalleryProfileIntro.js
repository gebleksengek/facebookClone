import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

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
				<View style={{ marginTop: 5, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{ color: '#4267B2' }}>EDIT FEATURED</Text>
				</View>
				<View style={{ paddingTop: 20, paddingBottom: 20, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
					<TouchableOpacity  style={{ borderWidth: 1, flexDirection: 'row', borderRadius: 5, padding: 5 }}>
						<Icon type='Feather' name='globe' style={{ color: '#4E5665', fontSize: 18 }}/>
						<Text> www.com</Text>
					</TouchableOpacity>
				</View>
				<View style={{ backgroundColor: '#F6F7F8', paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 50, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
					<Text style={{ fontSize: 15, fontWeight: 'bold' }}>ABOUT</Text>
					<Text style={{ fontSize: 15, fontWeight: 'bold' }}>PHOTOS</Text>
					<Text style={{ fontSize: 15, fontWeight: 'bold' }}>FRIENDS</Text>
				</View>
			</View>
		);
	}
}