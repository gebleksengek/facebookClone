import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Icon, Right } from 'native-base';

export default class StatusItem extends Component {
	render(){
		return(
			<View style={{ backgroundColor: 'white', marginTop: 10 }}>
				<View style={{ padding: 5, flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
					<View style={{ flex: 1, flexDirection: 'row'}}>
						<Image
						 source={require('../images/profile.jpg')}
						 style={{ width: 50, height: 50, borderRadius: 90 }}
						/>
						<View style={{ paddingLeft: 10 }}>
							<Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>UserName</Text>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<Text>Oct 8 at 10:17am </Text>
								<Icon style={{ color: '#4E5665',fontSize: 18 }} type='FontAwesome' name='globe' />
							</View>
						</View>
					</View>
					<Icon type='MaterialIcons' name='more-horiz' />
				</View>
				<View>
					<Text style={{ color: 'black', marginLeft: 10, margin: 5 }}>Nambah portofolio</Text>
					<Image
					 source={require('../images/image1.jpg')}
					 style={{ width: Dimensions.get('window').width, height: 200 }}
					/>
				</View>
				<View style={{ marginLeft: 20, marginRight: 20, paddingBottom: 10, paddingTop: 10, flexDirection: 'row' }}>
					<Image
					 source={require('../images/like.png')}
					 style={{ width: 20, height: 20}}
					/>
					<Text>You, and 85 others</Text>
				</View>
				<View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginLeft: 10 , justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#4E5665', paddingLeft: 30, paddingRight: 30 }}>
					<View style={{ alignItems: 'center', flexDirection: 'row', height: 40 }}>
						<Icon style={{ fontSize: 23, color: '#3578E5' }} type='FontAwesome' name='thumbs-up' />
						<Text style={{ fontWeight: 'bold', color: '#3578E5'}} > Like</Text>
					</View>
					<View style={{ alignItems: 'center', flexDirection: 'row', height: 40 }}>
						<Icon style={{ fontSize: 23, color: '#4E5665' }} type='Octicons' name='comment' />
						<Text style={{ fontWeight: 'bold' }}> Comment</Text>
					</View>
					<View style={{ alignItems: 'center', flexDirection: 'row', height: 40 }}>
						<Icon style={{ fontSize: 23, color: '#4E5665' }} type='MaterialCommunityIcons' name='share' />
						<Text style={{ fontWeight: 'bold' }}> Share</Text>
					</View>
				</View>
			</View>
		);
	}
}