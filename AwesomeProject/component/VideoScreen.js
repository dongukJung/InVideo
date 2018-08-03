import React from 'react';
import { Button, View, Text, WebView } from 'react-native';
import YouTube from 'react-native-youtube'

export default class VideoScreen extends React.Component {
  render() {

    const { navigation } = this.props;
    const vid = navigation.getParam('VideoID', 'xbUEALSCGNA'); // default video :: weatherman - MKRAIN
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Video Screen</Text>
          <YouTube
            apiKey="AIzaSyCKxJvHsYt-DMrLcbjYhASSMRLySmadmug"
            videoId={vid}  // The YouTube video ID
            play={true}             // control playback of video with true/false
            fullscreen={false}       // control whether the video should play in fullscreen or inline
            loop={true}             // control whether the video should loop when ended

            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}

            style={{ alignSelf: 'stretch', height: 300 }}
          />

  		    <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
}