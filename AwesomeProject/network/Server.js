import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';

const apiGetLogin = "ec2-18-209-29-27.compute-1.amazonaws.com";
async function getInfoFromServer(){
	try{
		let response = await fetch(apiGetLogin);
		let responseJson = await response.json();
		return responseJson.data; // array
	} catch (error) {
		console.error(error);
	}
}
export {getInfoFromServer};