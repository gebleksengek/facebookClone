import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'native-base';

import FriendsHeader from './FriendsHeader'
import FriendList from './FriendList';

export default class Friends extends Component {
	render(){
		return(
			<View style={{ backgroundColor: '#DCDEE3' }}>
				<View  style={{ flex: 1, backgroundColor: 'white', marginBottom: 10}}>
					<FriendsHeader total='2331' />
					<View style={{ flex: 1 }}>
						<View style={{ marginBottom: 5, flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
							<View>
								<Image
					 			 source={require('../images/image4.jpg')}
					 			 style={{ width: 120, height: 120}}
								/>
								<FriendList name='Dhiki' posts='6' />
							</View>
							<View>
								<Image
								 source={require('../images/image2.jpg')}
								 style={{ width: 120, height: 120}}
								/>
								<FriendList name='Jonny' posts='2' />
							</View>
							<View>
								<Image
								 source={require('../images/image3.jpg')}
								 style={{ width: 120, height: 120}}
								/>
								<FriendList name='Occultix' posts='5' />
							</View>
						</View>
						<View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
							<View>
								<Image
								 source={require('../images/image5.jpg')}
								 style={{ width: 120, height: 120}}
								/>
								<FriendList name='Jack' posts='8' />
							</View>
							<View>
								<Image
								 source={require('../images/image3.jpg')}
								 style={{ width: 120, height: 120}}
								/>
								<FriendList name='Deny' posts='11' />
							</View>
							<View>
								<Image
								 source={require('../images/image1.jpg')}
								 style={{ width: 120, height: 120}}
								/>
								<FriendList name='July' posts='1' />
							</View>
						</View>
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
						<Text>See All Friends ></Text>
					</View>
				</View>
			</View>
		);
	}
}