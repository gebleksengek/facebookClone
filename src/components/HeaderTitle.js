import React, { Component } from 'react';
import { Header, Body, Left, Right, Icon, Item } from 'native-base';
import { TextInput, Dimensions, View } from 'react-native';

import Navigation from './Navigation';

export default class HeaderTitle extends Component {
  render(){
    return(
    	<Header style={{ backgroundColor: '#4267B2' }}>
     		<Left style={{ flex: 1 }}>
     			<Icon name='camera' style={{ color:'white'}} />
     		</Left>
      	<Body style={{ flex: 5, left: -15 }} >
     			<Item>
     				<Icon name='md-search' style={{ color: 'white' }} />
     				<TextInput
     				 placeholder={ this.props.placeholder }
     				 placeholderTextColor='white'
             style={{ color: 'white', width: Dimensions.get('window').width - 120 }}
     				/>
     			</Item>
      	</Body>
        <Right>
          <Icon type='MaterialCommunityIcons' name='facebook-messenger' style={{ color:'white'}} />
        </Right>
      </Header>
    );
  }
}