import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import SelfPreviewScreen from './SelfPreview'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
    Preview: SelfPreviewScreen
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