import React, {useState} from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';

const CounterApplication = () =>{

    const [counter, setCounter] = useState(0);
    return(
        <View>
            <Button
            title='increase'
            onPress = {() => {
                setCounter(counter+1);
            }}
            />
            <Button
            title='decrease'
            onPress = {() => {
                setCounter(counter - 1)
            }}
            />
            <Text>Counter = {counter}</Text>
        </View>
    );
}

const Styles = StyleSheet.create({});

export default CounterApplication;