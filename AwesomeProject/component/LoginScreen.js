import React, { Component } from 'react';
import { FlatList, ActivityIndicator, AppRegistry, Button, View, Text, TextInput, TouchableHighlight,
  Alert, Image, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

import Wallpaper from './Wallpaper';
import logoImg from './img/reallogo.png';
import Form from './Form'

const ServerURL = 'http:18.209.29.27:3000/api/auth/login/local'

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      Success: false,
      dataSource: 'Nothing Yet'
    }
  }

  handlePress = async () => {
    return fetch(ServerURL, {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
          })
        })
      .then((response) => response.json())
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
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': this.state.email,
          'password': this.state.password})
      })
      .then((response) => response.text())
      .then((responseJson) => {
          console.log(responseJson);
          this.setState({
              dataSource: responseJson
              });
      })
      .then(()=>{
          if(this.state.dataSource == "Forbidden" || this.state.dataSource == "Bad Request") this.setState({ Success: false })
          else this.setState({ Success: true })
      })
      .then(()=>{
          if(this.state.Success) this.props.navigation.navigate('Home');
          else Alert.alert("Login Failed!", "Please check you Email and password again");
      })
      .catch((error) =>{
        console.error(error);
      });
    }



  render() {
    return (
      <Wallpaper>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <StatusBar hidden/>

            <View style={styles.logocontainer}>
              <Image source={logoImg} style={styles.logo} />
              <Text style={styles.text}>InVideo</Text>
            </View>
          
           <Text>GetFromServer: {JSON.stringify(this.state.dataSource)}</Text>
           
           <View style = {{alignSelf:'center', alignItems: 'center'}}>
            	<TextInput
                style={{height: 40, width: 150}}
                placeholder="Type your email"
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
        </View>

      </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
  logocontainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8
  },
  logo:{
    width: 150,
    height: 150
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  });
