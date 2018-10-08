import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Photos extends Component {
	render(){
		return(
			<View style={{ backgroundColor: '#DCDEE3' }}>
				<View style={{ flex: 1, backgroundColor: 'white', marginBottom: 10}}>
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
					<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
						<Text>See All Photos ></Text>
					</View>
				</View>
			</View>
		);
	}
}