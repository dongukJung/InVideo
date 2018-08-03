import React, { Component } from 'react';
import { FlatList, ActivityIndicator, AppRegistry, Button, View, Text, TextInput, TouchableHighlight,
  Alert, Image, ImageBackground, StatusBar } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

const ServerURL = 'http://128.54.112.69:4000/api/auth/login/local'

export default class LoginScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: 'test@test.test',
      password: '1234',
      Success: false,
      dataSource: 'Nothing Yet'
    }
  }

  handlePress = async () => {
    return fetch(ServerURL, {
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": this.state.email,
          "password": this.state.password})
      })
      .then((response) => response.text())
      .then((responseJson) => {
          console.log(responseJson);
          this.setState({
              dataSource: responseJson,
              });
            })
            .catch((error) =>{
              console.error(error);
            });
    }

    Logindetermine = async () => {
    fetch(ServerURL, {
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password})
      })
      .then((response) => response.text())
      .then((responseJson) => {
          console.log(responseJson);
          this.setState({
              dataSource: responseJson,
              Success: responseJson.status
              });
          if(this.state.Success) this.props.navigation.navigate('Home');
          else Alert.alert("Login Failed!");
      })
      .catch((error) =>{
        console.error(error);
      });
    }



  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <StatusBar hidden={true} />
       <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('./img/invideo.jpg')}>
        
       <Text>GetFromServer: {JSON.stringify(this.state.dataSource)}</Text>
       <Text>Success: {JSON.stringify(this.state.Success)}</Text>
       <View style = {{alignSelf:'center', alignItems: 'center'}}>
          <Text style={{color:'purple', fontSize:30, fontWeight:'bold'}}>Login Screen</Text>
        	<TextInput
            style={{height: 40, width: 150}}
            placeholder="Type your E-mail address"
            onChangeText={(text) => this.setState({email:text})}
          />
  		    <TextInput
            style={{height: 40, width: 150}}
            placeholder="Type tour Password"
            onChangeText={(text) => this.setState({password:text})}
          />
        </View>

        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
            title="Test Server Request"
            color="purple"
            onPress={this.handlePress.bind(this)}/>
        </View>

        <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
          <Button
            title="Log-in"
            color="purple"
            onPress={this.Logindetermine.bind(this)}/>
        </View>

        <View style = {{alignSelf:'center', alignItems: 'center', margin:5, flexDirection:'row'}}>
          <Text>Dont have your account yet? Just</Text>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Signup',
              {
                email : this.state.email,
                password : this.state.password
              })}
            style={{alignSelf:'center',justifyContent: 'center', margin:5}}>
            <Text style={{color:'blue', fontWeight:'bold'}}> Sign up </Text>
          </TouchableHighlight>
          <Toast
            ref="toast"
            style={{backgroundColor:'gray'}}
            position='top'
            positionValue={200}
            fadeInDuration={750}
            fadeOutDuration={1000}
            opacity={1.0}
            textStyle={{color:'white'}}
          />
        </View>
        <View style = {{alignSelf:'center', alignItems: 'center', marginTop:50}}>
          <Button
            title="Back to Home"
            color="gray"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        </ImageBackground>
      </View>
    );
  }
}