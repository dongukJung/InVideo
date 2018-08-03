import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import SelfPreviewScreen from './SelfPreview'
import VideoScreen from './VideoScreen'
import SignupScreen from './SignupScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Preview: SelfPreviewScreen,
    Video: VideoScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}