import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default class MoreInfo extends Component {
	render(){
		return(
			<View style={{ paddingTop: 10, paddingBottom: 10, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity  style={{ borderWidth: 1, flexDirection: 'row', borderRadius: 5, padding: 5 }}>
					<Icon type={this.props.iconType} name={this.props.iconName} style={{ color: '#4E5665', fontSize: 18 }}/>
					<Text> {this.props.text}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}