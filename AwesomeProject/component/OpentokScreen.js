import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';

export default class OpentokScreen extends Component {
  constructor(props) {
    super(props);
    this.apiKey = '46161232';
    this.sessionId = '2_MX40NjE2MTIzMn5-MTUzMzc4NDcyOTAyMn5XN1JFR0V6TXNxSjlZUVRnSDNNZ0ozT0h-fg';
    this.token = 'T1==cGFydG5lcl9pZD00NjE2MTIzMiZzaWc9Mzk4MzMxNTBmZDg3ZGQyYWQ4YzAzNDgyNWE3M2Q5YWRhNjUyZjczNDpzZXNzaW9uX2lkPTJfTVg0ME5qRTJNVEl6TW41LU1UVXpNemM0TkRjeU9UQXlNbjVYTjFKRlIwVjZUWE54U2psWlVWUm5TRE5OWjBvelQwaC1mZyZjcmVhdGVfdGltZT0xNTMzNzg0NzQzJm5vbmNlPTAuNzY0NTIwODcxMTQwMzQyNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTMzODA2MzQxJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
          <OTPublisher style={{ width: '100%', height: '100%'}} />
        </OTSession>
       <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
          color='gray'
        />
      </View>
    );
  }
}