import React, { Component } from 'react';
import { View, Image } from 'react-native';

import FriendsHeader from './FriendsHeader'
import FriendList from './FriendList';
import SeeAllText from './SeeAllText';

export default class Friends extends Component {
	render(){
		return(
			<View style={{ backgroundColor: '#DCDEE3' }}>
				<View  style={{ flex: 1, backgroundColor: 'white', marginBottom: 10}}>
					<FriendsHeader total='2331' />
					<View style={{ flex: 1 }}>
						<View style={{ marginBottom: 5, flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
							<FriendList
							 name='Dhiki' 
							 posts='6'
							 image='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg'
							/>
							<FriendList
							 name='Jonny' 
							 posts='2'
							 image='https://cdn.pixabay.com/photo/2018/09/14/22/51/cobblestones-3678292_960_720.jpg'
							/>
							<FriendList
							 name='Occultix' 
							 posts='5'
							 image='https://cdn.pixabay.com/photo/2018/09/07/14/11/city-3660779_960_720.jpg'
							/>
						</View>
						<View style={{ marginBottom: 5, flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
							<FriendList
							 name='Jack' 
							 posts='8'
							 image='https://cdn.pixabay.com/photo/2018/10/03/21/13/mushroom-3722395_960_720.jpg'
							/>
							<FriendList
							 name='Deny'
							 posts='11'
							 image='https://cdn.pixabay.com/photo/2018/10/05/21/04/dahlia-3726844_960_720.jpg'
							/>
							<FriendList
							 name='July' 
							 posts='1'
							 image='https://cdn.pixabay.com/photo/2018/09/25/21/54/hedgehog-3703244_960_720.jpg'
							/>
						</View>
					</View>
					<SeeAllText text='Friends' />
				</View>
			</View>
		);
	}
}