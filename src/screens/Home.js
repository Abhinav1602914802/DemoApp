import React from 'react';
import { View, Text, Button, TouchableOpacity , StyleSheet} from 'react-native';

class Home extends React.Component {
    render() {
      return (
        <View style={Styles.buttonStyle}>
          <Button 
          onPress = {()=> this.props.navigation.navigate('Component')}
          title='Go to the Component Screen!'
          />
          {/* <TouchableOpacity onPress={()=> this.props.navigation.navigate('two')}>
              <Text>Go to list List Screen</Text>
          </TouchableOpacity> */}

          <Button 
          onPress = {() => this.props.navigation.navigate('two')}
          title='Go to list screen'
          />

          <Button
          title='Go to image Screen'
          onPress={()=>this.props.navigation.navigate('Image')}
          />

          <Button 
            title='Go to Activity three!'
            onPress={()=>this.props.navigation.navigate('Three')}
          />
          <Button
          title='Counter Application!'
          onPress={()=>this.props.navigation.navigate('Counter')}
          />
          <Button 
          title = 'Go to Color Screen!'
          onPress={()=>this.props.navigation.navigate('Color')}
          />
          <Button
          title = 'Go to Square Demo!'
          onPress = {()=>this.props.navigation.navigate('Square')}
          />
          <Button
          title = 'Go to Constructor Screen!'
          onPress = {() => this.props.navigation.navigate('Constructor')}
          />
          <Button 
          title = 'Go to the Reducer Screen'
          onPress = {() => this.props.navigation.navigate('Reducer')}
          />
          <Button 
          title = 'Go to the Counter Reducer Screen'
          onPress = {() => this.props.navigation.navigate('CounterReducer')}
          />
          <Button 
          title = 'Go to Text Screen'
          onPress = {() => this.props.navigation.navigate('Text')}
          />
          <Button
          title = 'Go to Activity Four Screen'
          onPress = {() => this.props.navigation.navigate('Four')}
          />
          <Button 
          title = 'Go to Box Screen'
          onPress = {() => this.props.navigation.navigate('Box')}
          />
          <Button 
          title = 'Go to Activity Five'
          onPress = {() => this.props.navigation.navigate('Five')}
          />
          <Button 
          title = 'Go to Toast Screen'
          onPress = {() => this.props.navigation.navigate('Toast')}
          />
        </View>
      );
    }
  }

  const Styles = StyleSheet.create({
      buttonStyle:{
         flex:1, 
         flexDirection:"column",
         justifyContent:'space-around'
      }
  });
export default Home;