import React from 'react';
import { Button, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
    		  title="Go to Details"
    		  onPress={() => this.props.navigation.navigate('Details', {
            name : 'Jung Donguk',
            age : 25
            })}
        />
		    <Button
          title="Go just back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Open the Camera!"
          onPress={() => this.props.navigation.push('Preview')}
        />
      </View>
    );
  }
}