import React from 'react';
import { Text, StyleSheet} from 'react-native';

class ComponentScreen extends React.Component{
    render(){
        return (
           <Text style={Styles.textStyle}>I am in a Component Screen</Text>
        );
    }
}

const Styles = StyleSheet.create({
    textStyle:{
        fontSize : 40
    }
});

export default ComponentScreen;