import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
import ImageDetails from '../Components/ImageDetails'

class ImageScreen extends React.Component{
    render()
    {
        return(
            <View>
                <ImageDetails title='Forest' imageSource={require('../../assets/forest.jpg')}/>
                <ImageDetails title='Mountain' imageSource={require('../../assets/mountain.jpg')}/>
                <ImageDetails title='Beach' imageSource={require('../../assets/beach.jpg')}/>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    textStyle:{
        fontSize: 40
    }
});

export default ImageScreen;