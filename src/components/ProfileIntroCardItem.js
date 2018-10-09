import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

export default class ProfileIntroCardItem extends Component {
	render(){
		return(
    		<View style={{ paddingLeft: 10, flex: 1, flexDirection: 'row', marginBottom: 5 }}>
                <Icon
                 type={this.props.iconType}
                 name={this.props.iconName}
                 style={{ fontSize: 18 }}
                />
                <Text style={{ paddingLeft: 10 }}> { this.props.textLabel } </Text>
                <Text style={{ fontWeight: 'bold' }}>{ this.props.textValue }</Text>
            </View>
		);
	}
}