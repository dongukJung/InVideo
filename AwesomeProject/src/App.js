import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import SelfPreviewScreen from './SelfPreview'
import VideoScreen from './VideoScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
    Preview: SelfPreviewScreen,
    Video: VideoScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}