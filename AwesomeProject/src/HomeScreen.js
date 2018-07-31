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
        <Text>Home Screen</Text>
        <Button
    		  title="Go to Details"
    		  onPress={() => this.props.navigation.navigate('Details', {
            name : 'Jung Donguk',
            age : 25
            })}
          color='pink'
        />
        <Button
          title="Open the Camera!"
          onPress={() => this.props.navigation.push('Preview')}
          color='green'
        />
        <Button
          title="Open the Video!"
          if
          onPress={() => this.props.navigation.push('Video', {VideoID : this.state.VideoID})}
          color='gray'
        />
        <TextInput
          style={{height: 40, width: 150}}
          placeholder="Type the Video ID here!"
          onChangeText={(text) => this.setState({VideoID:text})}
        />
      </View>
    );
  }
}