import React from 'react';
import { Button, View, Text } from 'react-native';

export default class VideoScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Video Screen</Text>
  		    <Button
            title="Go just back"
            onPress={() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
}