import React, { Component } from 'react';
import { View } from 'react-native';

import CoverPhoto from './CoverPhoto';
import ProfilePhoto from './ProfilePhoto';

export default class TimelineCover extends Component {
    render(){
        return(
        	<View>
        		<CoverPhoto />
		        <ProfilePhoto name='User Name' />
	        </View>
        );
    }
}