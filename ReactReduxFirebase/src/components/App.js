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
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import Login from './Login';
import Loader from './Loader';
import Navigation from './Navigation';
import reducers from '../reducers/PeopleReducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
  state = { loggedIn: null};
  componentWillMount() {
      firebase.initializeApp({
          apiKey: "AIzaSyBn11P4q8tJxiNG4ZnFSnogB5NlqexHZf8",
          authDomain: "crmlinkedin-5de7a.firebaseapp.com",
          databaseURL: "https://crmlinkedin-5de7a.firebaseio.com",
          projectId: "crmlinkedin-5de7a",
          storageBucket: "",
          messagingSenderId: "360355968013"
      });
      
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.setState({
            loggedIn: true
          });
        } else {
          this.setState({
            loggedIn: false
          });
        }
      });
  }

  renderInitalView() {
    switch(this.state.loggedIn) {
      case true:
        return <Navigation />;
      case false:
        return <Login />;
      default:
        return <Loader size="large" />;  
    }
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.renderInitalView()}
        </View>
      </Provider>
    );
  }
}

