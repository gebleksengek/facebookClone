import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import HeaderTitle from '../components/HeaderTitle';
import TimelineCover from '../components/TimelineCover';
import TimelineCoverButton from '../components/TimelineCoverButton';
import ProfileIntroCard from '../components/ProfileIntroCard';
import GalleryProfileIntro from '../components/GalleryProfileIntro';
import StatusInput from '../components/StatusInput';
import Photos from '../components/Photos';
import Friends from '../components/Friends';
import Filter from '../components/Filter';
import Status from '../components/Status';

export default class ProfilePage extends Component {
    render(){
        return(
            <View style={{ flex: 1 }}>
                <HeaderTitle />
                <ScrollView>
                    <TimelineCover />
                    <TimelineCoverButton />
                    <ProfileIntroCard />
                    <GalleryProfileIntro />
                    <StatusInput />
                    <Photos />
                    <Friends />
                    <Filter />
                    <Status />
                </ScrollView>
            </View>
        );
    }
}