import React, { Component } from 'react';
import { View, Image } from 'react-native';

import PhotosHeader from './PhotosHeader';
import SeeAllText from './SeeAllText';

export default class Photos extends Component {
	render(){
		return(
			<View style={{ backgroundColor: '#DCDEE3' }}>
				<View style={{ flex: 1, backgroundColor: 'white', marginBottom: 10}}>
					<PhotosHeader />
					<View style={{ justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<Image
							 source={require('../images/image1.jpg')}
							 style={{ width: 190, height: 190, marginBottom: 3}}
							/>
							<Image
							 source={require('../images/image2.jpg')}
							 style={{ width: 190, height: 190}}
							/>
						</View>
						<View style={{ flex: 1, alignItems: 'flex-end' }}>
							<Image
							 source={require('../images/image3.jpg')}
							 style={{ width: 190, height: 126, marginBottom: 3}}
							/>
							<Image
							 source={require('../images/image4.jpg')}
							 style={{ width: 190, height: 126, marginBottom: 3}}
							/>
							<Image
							 source={require('../images/image5.jpg')}
							 style={{ width: 190, height: 125}}
							/>
						</View>
					</View>
					<SeeAllText text='Photos' />
				</View>
			</View>
		);
	}
}