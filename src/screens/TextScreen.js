import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TestScreen = () => {

    const [name, setName] = useState(' ');

    return <View>
        <TextInput 
        autoCapitalize="sentences"
        autoCorrect={true}
        style={styles.inputStyle} 
        value={name}
        onChangeText={(newValue=> setName(newValue))}
        />

        <Text>{name}</Text>
    </View>
}

const styles = StyleSheet.create({
    inputStyle: {
        margin: 20,
        borderColor: 'black',
        borderWidth:2,
        borderRadius:10
    }
});

export default TestScreen;