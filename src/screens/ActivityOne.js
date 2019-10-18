import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class ActivityOne extends React.Component{
    
    render(){
        const name='Demo';
        return(
            <View>
                <Text style={Styles.heading}>Get Started with react Native!</Text>
                <Text style={Styles.ActivityOne}>My name is {name}</Text>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    heading:{
        fontSize: 45
    },
    subheading:{
        fontSize: 20,
        marginTop: 20
    }
})

export default ActivityOne;