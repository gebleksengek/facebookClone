import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

export default class ProfileIntroCard extends Component {
    render(){
        return(
            <View sytle={{ flex: 1, flexDirection: 'column', }}>
            	<View style={{ paddingLeft: 10, flex: 1, flexDirection: 'row', marginBottom: 5 }}>
            		<Icon
            		 type='Octicons'
            		 name='home'
            		 style={{ fontSize: 18 }}
            		/>
            		<Text style={{ paddingLeft: 10 }}> Live in </Text>
            		<Text style={{ fontWeight: 'bold' }}>Yogyakarta</Text>
            	</View>
            	<View style={{ paddingLeft: 10, flex: 1, flexDirection: 'row', marginBottom: 5 }}>
            		<Icon
            		 type='MaterialCommunityIcons'
            		 name='map-marker-outline'
            		 style={{ fontSize: 18 }}
            		/>
            		<Text style={{ paddingLeft: 10 }}> From </Text>
            		<Text style={{fontWeight: 'bold'}}>Yogyakarta</Text>
            	</View>
            	<View style={{ paddingLeft: 10, flex: 1, flexDirection: 'row', marginBottom: 5 }}>
            		<Icon
            		 type='MaterialCommunityIcons'
            		 name='rss'
            		 style={{ fontSize: 18 }}
            		/>
            		<Text style={{ paddingLeft: 10 }}> Followed by </Text>
            		<Text style={{fontWeight: 'bold'}}>99 people</Text>
            	</View>
            	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            		<Text style={{ color: '#4267B2' }}>EDIT DETAILS</Text>
            	</View>
            </View>
        );
    }
}