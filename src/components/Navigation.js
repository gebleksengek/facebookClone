import React, { Component } from 'react';
import { Item, Icon } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Navigation extends Component {
	render(){
		return(
			<View style={ styles.container }>
				<View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
					<Icon
					 onPress={() => { Actions.home() }} 
					 type='MaterialCommunityIcons' 
					 name='home' 
					 style={ styles.icon }
					/>
					<Icon
					 onPress={() => { Actions.store() }} 
					 type='MaterialCommunityIcons' 
					 name='store' 
					 style={ styles.icon } 
					/>
					<Icon
					 onPress={() => { Actions.profile() }} 
					 type='FontAwesome' 
					 name='user-circle-o' 
					 style={ styles.icon } 
					/>
					<Icon
					 onPress={() => { Actions.notiv() }} 
					 type='MaterialCommunityIcons' 
					 name='bell-outline' 
					 style={ styles.icon } 
					/>
					<Icon
					 onPress={() => { Actions.more() }} 
					 type='Entypo' 
					 name='menu' 
					 style={ styles.icon } 
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		borderColor: '#DCDEE3', 
		borderBottomWidth: 1, 
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: 'white' 
	},
	icon: {
		color: '#4E5665',
		fontSize: 30,
	}
})