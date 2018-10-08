import React, { Component } from 'react';
import { TouchableOpacity, Image, Dimensions, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class TimelineCover extends Component {
    render(){
        return(
        	<View>
        		<View>
			        <Image
			         source={ require('../images/cover.jpg') }
			         style={ styles.cover }
			        />
			        <View style={{ top: -20,flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
						<TouchableOpacity  style={{ backgroundColor: '#DCDEE3', flexDirection: 'row' }}>
							<Icon style={{ fontSize: 20 }} type='Entypo' name='camera' />
							<Text> Edit</Text>
						</TouchableOpacity>
					</View>
		        </View>
		        <View style={ styles.profileContainer }>
		        	<View>
				        <Image
				         source={ require('../images/profile.jpg') }
				         style={ styles.profileImage }
				        />
				        <View style={{ top: -40,flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
							<TouchableOpacity  style={{ backgroundColor: '#DCDEE3', flexDirection: 'row' }}>
								<Icon style={{ fontSize: 20 }} type='Entypo' name='camera' />
								<Text> Edit</Text>
							</TouchableOpacity>
						</View>
			        </View>
			        <Text style={{ fontSize: 30, color: '#4E5665', top: -60 }}>UserName</Text>
		        </View>
	        </View>
        );
    }
}

const styles = StyleSheet.create({
	cover: {
		width: Dimensions.get('window').width,
		height: 200
	},
	profileContainer: {
		top: -50,
		flex: 1,
		width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	profileImage: {
		width: 120,
		height: 120,
		borderWidth: 1.5,
		borderColor: 'white'
	}
})