import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen =()=>{

    const [colors, setColor] = useState([]);
    console.log(colors);
    return(
        <View>
            <Button 
            title = 'Add a color'
            onPress = {()=>{
                setColor([...colors, randomColor()])
            }}
            />
            <FlatList
            keyExtractor = {item => item}
            data = {colors}
            renderItem = {({item}) => {
                return (
                    <View style = {{height: 100, width: 100, backgroundColor: item}}>
                        <Text>{item}</Text>
                    </View>
                );
            }}
            />
            
        </View>
    );
}


const randomColor = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red}, ${green}, ${blue})`;
}
const Styles = StyleSheet.create({});

export default ColorScreen;