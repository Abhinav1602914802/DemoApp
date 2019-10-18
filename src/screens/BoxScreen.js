import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () =>{

    return(
        <View style = {Styles.viewStyle}>
            <Text style = {Styles.textOneStyle}>Child #1</Text>
            <Text style = {Styles.textTwoStyle}>Child #2</Text>
            <Text style = {Styles.textThreeStyle}>Child #3</Text>
        </View>
    );

}

const Styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
        height: 200,
        //alignItems: 'flex-start',
        //alignItems: 'center',
        //alignItems: 'flex-end',
        //justifyContent: 'flex-start',
        // justifyContent:"space-between"
        // justifyContent: "space-evenly"
        //justifyContent: "space-around"
    },
    // textStyle: {
    //     borderWidth: 3,
    //     borderColor: "red",
    //     padding: 10
    // }
    textOneStyle:{
        borderColor: "red",
        borderWidth: 3,
        padding: 10,
        //flex:1
        //flex: 4
    },
    textTwoStyle:{
        borderColor: "red",
        borderWidth: 3,
        padding: 10,
        //flex: 1
        //flex: 4
        //alignSelf: "flex-start"
        //alignSelf: "flex-end"
        //alignSelf: "center"
        // position: "absolute",
        // top:0,
        // bottom: 0,
        // left:0,
        // right:0
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle:{
        borderColor: "red",
        borderWidth: 3,
        padding: 10,
        //flex: 1
        //flex: 2
    }
});

export default BoxScreen;