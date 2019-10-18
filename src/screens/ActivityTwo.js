import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

class ActivityTwo extends React.Component{

    render(){
        const friends = [
            {name: "Friend#1", age : '21'},
            {name: "Friend#2", age : '22'},
            {name: "Friend#3", age : '32'},
            {name: "Friend#4", age : '41'},
            {name: "Friend#5", age : '52'},
            {name: "Friend#6", age : '65'},
            {name: "Friend#7", age : '71'},
            {name: "Friend#8", age : '20'}
         ];
        return(
            <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item})=>{
                return <Text style={Styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
            />
        );
    }
}

const Styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        marginTop:20
    }
});

export default ActivityTwo;