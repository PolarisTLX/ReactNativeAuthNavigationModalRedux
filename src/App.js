import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
// applyMiddleware (above) is needed for ReduxThunk below:
import ReduxThunk from 'redux-thunk';

import LoginForm from './components/LoginForm';
import Router from './Router';

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
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;