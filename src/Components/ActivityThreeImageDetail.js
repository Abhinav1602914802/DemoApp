import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class ActivityThreeImageDetails extends React.Component{
    render(){
        return(
            <View>
                <Image source={this.props.imageSource} />
                <Text>{this.props.title}</Text>
                <Text>Image Score - {this.props.imageSource}</Text>
            </View>
        );
    }
}

export default ActivityThreeImageDetails;