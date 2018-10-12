import React, { Component } from 'react';
import { View } from 'react-native';

import StatusHeader from './StatusHeader';
import StatusContent from './StatusContent';
import StatusTotalReact from './StatusTotalReact';
import StatusReactButton from './StatusReactButton';

export default class StatusItem extends Component {
	render(){
		return(
			<View style={{ backgroundColor: 'white', marginTop: 10 }}>
				<StatusHeader date={this.props.date} />
				<StatusContent text={this.props.text} image={this.props.image} />
				<StatusTotalReact total={this.props.total} />
				<StatusReactButton />				
			</View>
		);
	}
}