import React, { Component } from 'react';
import { Header, Body, Left, Right, Icon, Item } from 'native-base';
import { TextInput } from 'react-native';

export default class HeaderTitle extends Component {
    render(){
        return(
           	<Header style={{ backgroundColor: '#4267B2' }}>
           		<Left style={{ flex: 1 }}>
           			<Icon name='md-arrow-back' style={{ color:'white'}} />
           		</Left>
           		<Body style={{ flex: 5, left: -15 }} >
           				<Item>
           					<Icon name='md-search' style={{ color: 'white' }} />
           					<TextInput
           					 placeholder="Search in UserName's posts, photos, and tags."
           					 placeholderTextColor='white'
                             style={{ color: 'white' }}
           					/>
           				</Item>
           		</Body>
                <Right  style={{ flex: 1 }}>
                    <Icon style={{ color: 'white' }} type='Feather' name='user' />
                </Right>
           	</Header>
        );
    }
}