import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivityFive = () =>{

    return(
        <View style={Styles.viewParentStyle}>
            <View style = {Styles.viewOneStyle}></View>
            <View style = {Styles.viewTwoStyle}></View>
            <View style = {Styles.viewThreeStyle}></View>
        </View>
    );
}

const Styles = StyleSheet.create({
    viewParentStyle: {
        borderWidth: 3,
        borderColor: "black",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        marginTop:50
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
})

export default ActivityFive;