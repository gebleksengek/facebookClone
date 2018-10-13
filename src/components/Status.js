import React, { Component } from 'react';
import { View } from 'react-native';

import StatusItem from './StatusItem';

export default class Status extends Component {
	render(){
		return(
			<View style={{ backgroundColor: '#DCDEE3' }}>
				<StatusItem
				 date='Oct 8 at 10:17am' 
				 total='55' 
				 image='https://cdn.pixabay.com/photo/2018/09/14/22/51/cobblestones-3678292_960_720.jpg'
				 text='Nambah Portofolio'
				/>
				<StatusItem 
				 date='Oct 5 at 01:11pm' 
				 total='99' 
				 image='https://cdn.pixabay.com/photo/2018/10/03/21/13/mushroom-3722395_960_720.jpg'
				 text='Text Status'
				/>
				<StatusItem 
				 date='Oct 4 at 09:30am' 
				 total='43'
				 image='https://cdn.pixabay.com/photo/2018/09/25/21/54/hedgehog-3703244_960_720.jpg'
				 text='Contoh Status'
				/>
			</View>
		);
	}
}