import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // the current user:
  const { currentUser } = firebase.auth();

  return (dispatch) => {  //this line/wrapper needed to avoid an error using redux-thunk
    
    // need to update the firebase rules for their Version 2 that is different from the course.
    /*
    rules_version = '2';
    service cloud.firestore {
      match / users / { user } {
        allow read, write;
        match / employees / { employee } {
          allow read, write;
        }
      }
    }
    */
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
      });
  };
};