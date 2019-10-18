import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

class ListScreen extends React.Component{
    render(){

        const friends = [
           {name: "Friend#1", key : '1'},
           {name: "Friend#2", key : '2'},
           {name: "Friend#3", key : '3'},
           {name: "Friend#4", key : '4'},
           {name: "Friend#5", key : '5'},
           {name: "Friend#6", key : '6'},
           {name: "Friend#7", key : '7'},
           {name: "Friend#8", key : '9'}
        ];
        return (
            <FlatList
            //horizontal  
            showsHorizontalScrollIndicator={false}
            data={friends}
            renderItem={({item}) => {
                return <Text style={Styles.textStyle}>{item.name}</Text>
            }}
            />
        );
    }
};

const Styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        marginTop:20
    }
});

export default ListScreen;