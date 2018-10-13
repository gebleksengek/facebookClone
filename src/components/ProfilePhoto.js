import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'native-base';

export default class ProfilePhoto extends Component {
	render(){
		return(
			<View style={ styles.container }>
	        	<View>
			        <Image
			         source={ require('../images/profile.jpg') }
			         style={{ width: 120, height: 120, borderWidth: 1.5, borderColor: 'white' }}
			        />
			        <View style={ styles.viewEdit }>
						<TouchableOpacity  style={{ backgroundColor: '#DCDEE3', flexDirection: 'row' }}>
							<Icon
							 style={{ fontSize: 20 }} 
							 type='Entypo' 
							 name='camera'
							/>
							<Text> Edit</Text>
						</TouchableOpacity>
					</View>
		        </View>
		        <Text style={{ fontSize: 30, color: '#4E5665', top: -60 }}>{ this.props.name }</Text>
	        </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		top: -50, flex: 1, 
		width: Dimensions.get('window').width, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
	viewEdit: {
		top: -40,flex: 1, 
		flexDirection: 'row', 
		justifyContent: 'flex-end', 
		alignItems: 'center' 
	}
})