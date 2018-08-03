import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(){
    super()

    this.state = {
      VideoID: ''
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <Text style={{color:'purple', fontSize:30, fontWeight:'bold'}}>Home Screen</Text>
        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
      		  title="Log in!"
      		  onPress={() => this.props.navigation.navigate('Login')}
            color='pink'
          />
        </View>
        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
            title="Open the Camera!"
            onPress={() => this.props.navigation.push('Preview')}
            color='green'
          />
        </View>
        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
            title="Open the Video!"
            onPress={() => this.props.navigation.push('Video', {VideoID : this.state.VideoID})}
            color='gray'
          />
        </View>
        <TextInput
          style={{height: 40, width: 150}}
          placeholder="Type the Video ID here!"
          onChangeText={(text) => this.setState({VideoID:text})}
        />
      </View>
    );
  }
}