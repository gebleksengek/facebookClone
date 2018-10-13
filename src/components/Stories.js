import React, { Component } from 'react';
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import StoriesItem from './StoriesItem';

export default class Stories extends Component {
	render(){
		return(
			<View style={{ marginTop: 10 }}>
				<View style={ styles.header }>
					<Text>Stories</Text>
					<Text>Your Archive</Text>
				</View>
				<ScrollView horizontal={true} style={{ paddingBottom: 10, backgroundColor: 'white', }}>
					<StoriesItem
					 storyImage='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg'
					 profileImage='https://cdn.pixabay.com/photo/2018/10/03/21/13/mushroom-3722395_960_720.jpg'
					 name='Jack'
					/>
					<StoriesItem
					 storyImage='https://cdn.pixabay.com/photo/2018/10/03/21/13/mushroom-3722395_960_720.jpg'
					 profileImage='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg'
					 name='July'
					/>
					<StoriesItem
					 storyImage='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg'
					 profileImage='https://cdn.pixabay.com/photo/2018/10/03/21/13/mushroom-3722395_960_720.jpg'
					 name='Jack'
					/>
					<StoriesItem
					 storyImage='https://cdn.pixabay.com/photo/2018/10/03/21/13/mushroom-3722395_960_720.jpg'
					 profileImage='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg'
					 name='July'
					/>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		 backgroundColor: 'white',
		 padding: 7, 
		 flex: 1, 
		 flexDirection: 'row', 
		 justifyContent: 'space-between',
		 alignItems: 'center' 
	}
})