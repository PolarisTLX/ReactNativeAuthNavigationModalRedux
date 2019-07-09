import firebase from 'firebase';
import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        // the fact that we can have this 'dispatch' and manually call ONLY AFTER the '.then' is what makes redux thunk work in asynchronous fasion:
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
      });
  };
};