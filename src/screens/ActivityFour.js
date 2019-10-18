import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const ActivityFour = () =>{

    const [password, setPassword] =  useState(' ');

    return <View>
        <TextInput
        autoCapitalize="sentences"
        autoCorrect={true}
        style={styles.inputStyle} 
        value={password}
        onChangeText={(newValue=> setPassword(newValue))}
        />
        {password.length < 5 ? <Text>Password must be 5 or more character</Text> : null}
        {password.length > 10 ? <Text>Password must be 10 or less character</Text> : null}
    </View>
}

const styles = StyleSheet.create({
    inputStyle:{
        margin: 15,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10
    }
})

export default ActivityFour;