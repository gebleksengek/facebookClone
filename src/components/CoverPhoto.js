import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'native-base';

export default class CoverPhoto extends Component {
	render(){
		return(
			<View>
		        <Image
		         source={ require('../images/cover.jpg') }
		         style={{ width: Dimensions.get('window').width, height: 200}}
		        />
		        <View style={{ top: -20,flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
					<TouchableOpacity  style={{ backgroundColor: '#DCDEE3', flexDirection: 'row' }}>
						<Icon style={{ fontSize: 20 }} type='Entypo' name='camera' />
						<Text> Edit</Text>
					</TouchableOpacity>
				</View>
	        </View>
		);
	}
}