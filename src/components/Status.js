import React, { Component } from 'react';
import { View } from 'react-native';

import StatusItem from './StatusItem';

export default class Status extends Component {
	render(){
		return(
			<View style={{ backgroundColor: '#DCDEE3' }}>
				<StatusItem />
				<StatusItem />
				<StatusItem />
			</View>
		)
	}
}



// import React, { Component } from 'react';
// import { View, Text, Image, Dimensions } from 'react-native';
// import { Icon, Right } from 'native-base';

// export default class Status extends Component {
// 	render(){
// 		return(
// 			<View style={{ flex: 1 }}>
// 				<View>
// 					<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
// 						<View style={{ flex: 1, flexDirection: 'row'}}>
// 							<Image
// 							 source={require('../images/profile.jpg')}
// 							 style={{ width: 50, height: 50, borderRadius: 90 }}
// 							/>
// 							<View>
// 								<Text>UserName</Text>
// 								<View style={{ flex: 1, flexDirection: 'row' }}>
// 									<Text>Oct 8 at 10:17am</Text>
// 									<Icon type='FontAwesome' name='globe' />
// 								</View>
// 							</View>
// 						</View>
// 						<Icon type='MaterialIcons' name='more-horiz' />
// 					</View>
// 					<View>
// 						<Text>Nambah portofolio</Text>
// 						<Image
// 						 source={require('../images/image1.jpg')}
// 						 style={{ width: Dimensions.get('window').width, height: 200 }}
// 						/>
// 					</View>
// 					<View style={{ marginLeft: 20, marginRight: 20, paddingBottom: 10, paddingTop: 10, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black' }}>
// 						<Image
// 						 source={require('../images/like.png')}
// 						 style={{ width: 20, height: 20}}
// 						/>
// 						<Text>You, and 85 others</Text>
// 					</View>
// 					<View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginLeft: 10 , justifyContent: 'space-between' }}>
// 						<View>
// 							<Icon type='FontAwesome' name='thumbs-up' />
// 							<Text>Like</Text>
// 						</View>
// 						<View>
// 							<Icon type='Octicons' name='comment' />
// 							<Text>Comment</Text>
// 						</View>
// 						<View>
// 							<Icon type='MaterialCommunityIcons' name='share' />
// 							<Text>Share</Text>
// 						</View>
// 					</View>
// 				</View>
// 			</View>
// 		);
// 	}
// }