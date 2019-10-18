import React from 'react';
import {Text, StyleSheet} from 'react-native';

class ConstructorScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={message:'I am in a constructor'};
    }

    render(){
        return <Text>{this.state.message}</Text>
    }
    componentDidMount(){
        this.setState({
            message:'I got an Achivement'
        })
    }
}

export default ConstructorScreen;