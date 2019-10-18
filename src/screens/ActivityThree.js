import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ActivityThreeImageDetails from '../Components/ActivityThreeImageDetail'

class ActivityThree extends React.Component{
    render(){
        return(
            <View>
                <ActivityThreeImageDetails 
                title='Forest'
                imageSource = {require('../../assets/forest.jpg')}
                imageScore = '6'
                />
                <ActivityThreeImageDetails
                title='mountain'
                imageSource = {require('../../assets/mountain.jpg')}
                imageScore = '5'
                />
                <ActivityThreeImageDetails
                title='Beach'
                imageSource = {require('../../assets/beach.jpg')}
                imageScore = '9'
                />
            </View>
        );
    }
}

const Styles = StyleSheet.create({});

export default ActivityThree;