import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD5vVeMUFNBS1WbHvenRRug813ykAJrQgI',
      authDomain: 'reactnativeauthnavigationredux.firebaseapp.com',
      databaseURL: 'https://reactnativeauthnavigationredux.firebaseio.com',
      projectId: 'reactnativeauthnavigationredux',
      storageBucket: '',
      messagingSenderId: '50162235900',
      appId: '1:50162235900:web:1c93040ee445fd2f'
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello Another React Native project!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;