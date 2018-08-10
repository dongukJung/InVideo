import React, { Component } from 'react';
import { Alert,
        AppRegistry,
        Button,
        StyleSheet,
        View,
        Text,
        Image,
        Dimensions,
        TouchableOpacity,
        TouchableHighlight } from 'react-native';
import { RNCamera } from 'react-native-camera';

import * as posenet from '@tensorflow-models/posenet';
import {drawKeypoints, drawSkeleton} from './demo_util';
import posture from './img/person2.jpg';

const imageScaleFactor = 0.5;
const outputStride = 16;
const flipHorizontal = false;




export default class PosenetScreen extends React.Component {

  estimatePoseOnImage = async (imageElement) => {
    const net = await posenet.load(0.50);
    const pose = await net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride);
    return pose;
  }
  constructor(props) {
    super(props);
    this.state = {
      cameraType: 'front',
      mirrorMode: false
    };
    var imageRef = React.createRef();

  }


  changeCameraType() {
    if (this.state.cameraType === 'back') {
      this.setState({
        cameraType: 'front',
        mirrorMode: true
      });
    } else {
      this.setState({
        cameraType: 'back',
        mirrorMode: false
      });
    }
  }

  componentDidMount() {
    const img = this.imageRef.current;
    console.log(img);
    const pose = this.estimatePoseOnImage(img);
    console.log('pose', pose);
  }


  render() {
    return (
      <View style={styles.container}>
          <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style = {styles.preview}
              type={this.state.cameraType}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}>
              <TouchableHighlight
              title = "Turn"
                onPress={this.changeCameraType.bind(this)}>
                <View style = {{height:50,width:50,backgroundColor:"skyblue"}}></View>
              </TouchableHighlight>
          </RNCamera>
          <Image
            source={posture}
            style={styles.preview}
            ref = {imageRef} />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Turn Off"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent:'space-between'
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  preview: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
