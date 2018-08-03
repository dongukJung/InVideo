import React, { Component } from 'react';
import { AppRegistry, Button, View, Text, TextInput, TouchableHighlight, Alert } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

import validate from './validate'
import global from './global'

const ServerURL = 'http://128.54.112.69:4000/api/auth/register/local'

export default class SignupScreen extends React.Component {
  constructor(){
    super()

    this.state = {
      username: '',
      email:'',
      password:'',
      cpassword:''
    }
  }

  SignupConfirm() {
    if(this.state.username == '') this.refs.toast.show('Please enter your Username!');
    else if(this.state.email == '') this.refs.toast.show('Please enter your e-mail address!');
    else if(this.state.password == '') this.refs.toast.show('Please enter your password!');
    else if(this.state.cpassword == '') this.refs.toast.show('Please enter your password again for confirm!');
    else if(this.state.password != this.state.cpassword) this.refs.toast.show('Passwords are not matching!\nPlease check them again');
    else Alert.alert('Check this again',
              'name : ' + this.state.username
              + '\nemail : ' + this.state.email
              + '\npassword : ' + this.state.password,
              [
                {text: 'Modify Info', onPress: () => console.log("returned to signup page")},
                {text: 'Register Now!', onPress: this.SignupRequest.bind(this)}
              ]);
  }

  SignupRequest = async () => {
    fetch(ServerURL, {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "username": this.state.username,
          "email": this.state.email,
          "password": this.state.password})
      })
      .then((response) => response.text())
      .then((responseJson) => {
          console.log(responseJson);
          this.setState({
              dataSource: responseJson,
              Success: true
              });
          if(this.state.Success){
            Alert.alert('Registration Success', 'Congratulations! Your Registration was Succssful',
              [{text: 'Go to login page', onPress: ()=> this.props.navigation.goBack()}]);
          }
          else this.refs.toast.show("Registration failed. Please try again");
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style = {{alignSelf:'center', alignItems: 'center'}}>
          <Text>GetFromServer: {JSON.stringify(this.state.dataSource)}</Text>
          <Text style={{color:'purple', fontSize:30, fontWeight:'bold'}}>Signup Screen</Text>
          <View style={{alignItems: 'center',  flexDirection:'row'}}>
            <Text style={{color:'black', fontWeight:'bold'}}>Username : </Text>
            <TextInput
              style={{height: 40, width: 120}}
              placeholder="Donguk"
              onChangeText={(text) => this.setState({username:text})}
            />
          </View>

        	<View style={{alignItems: 'center',  flexDirection:'row'}}>
            <Text style={{color:'black', fontWeight:'bold'}}>E-mail Address : </Text>
            <TextInput
              style={{height: 40, width: 150}}
              placeholder="abcd@invideo.com"
              onChangeText={(text) => this.setState({email:text})}
            />
          </View>

  		    <View style={{alignItems: 'center',  flexDirection:'row'}}>
            <Text style={{color:'black', fontWeight:'bold'}}>Password : </Text>
            <TextInput
              secureTextEntry={true}
              style={{height: 40, width: 120}}
              placeholder="********"
              onChangeText={(text) => this.setState({password:text})}
            />
          </View>

          <View style={{alignItems: 'center',  flexDirection:'row', marginRight:50}}>
            <Text style={{color:'black', fontWeight:'bold'}}>Confirm Password : </Text>
            <TextInput
              secureTextEntry={true}
              style={{height: 40, width: 120}}
              placeholder="********"
              onChangeText={(text) => this.setState({cpassword:text})}
            />
          </View>

        </View>
        <View style = {{alignSelf:'center', flexDirection:'row'}}>
          <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
            <Button
              title="Register!"
              color="purple"
              onPress={this.SignupConfirm.bind(this)}
            />
          </View>
          <View style = {{alignSelf:'center', alignItems: 'center', margin:5}}>
            <Button
              title="Back to Login"
              color="gray"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
        </View>
        <Toast
            ref="toast"
            style={{backgroundColor:'gray'}}
            position='bottom'
            positionValue={200}
            fadeInDuration={750}
            fadeOutDuration={1000}
            opacity={1.0}
            textStyle={{color:'white'}}
          />
      </View>
    );
  }
}