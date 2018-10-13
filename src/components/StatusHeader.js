import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class StatusHeader extends Component {
	render(){
		return(
			<View style={ styles.container }>
				<View style={{ flex: 1, flexDirection: 'row'}}>
					<Image
					 source={require('../images/profile.jpg')}
					 style={{ width: 50, height: 50, borderRadius: 90 }}
					/>
					<View style={{ paddingLeft: 10 }}>
						<Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>User Name</Text>
						<View style={{ flex: 1, flexDirection: 'row' }}>
							<Text>{this.props.date} </Text>
							<Icon
							 style={{ color: '#4E5665',fontSize: 18 }} 
							 type='FontAwesome' 
							 name='globe'
							/>
						</View>
					</View>
				</View>
				<Icon type='MaterialIcons' name='more-horiz' />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 5,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})