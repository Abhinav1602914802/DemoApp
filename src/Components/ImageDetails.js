import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';

class ImageDetails extends React.Component{
    render()
    {
        console.log('===============================');
        console.log(this.props);
        return(
            <View>
                <Image
                    source={this.props.imageSource}
                />
                <Text style={Styles.textStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    textStyle:{
        fontSize: 20
    }
});

export default ImageDetails;