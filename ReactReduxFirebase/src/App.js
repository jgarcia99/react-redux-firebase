/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
          apiKey: "AIzaSyBn11P4q8tJxiNG4ZnFSnogB5NlqexHZf8",
          authDomain: "crmlinkedin-5de7a.firebaseapp.com",
          databaseURL: "https://crmlinkedin-5de7a.firebaseio.com",
          projectId: "crmlinkedin-5de7a",
          storageBucket: "",
          messagingSenderId: "360355968013"
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the CRM!!!!!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});