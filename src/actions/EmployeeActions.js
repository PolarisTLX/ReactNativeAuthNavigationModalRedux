import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
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
        // clear the form in the reducer after saved:
        dispatch({ type: EMPLOYEE_CREATE });
        // navigate back to EmployeeList
        Actions.employeeList({ type: 'reset' });
      });
  };
};

// get data / employees from online Firebase database, if it was working:
export const employeesFetch = () => {

  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().red(`/users/${currentUser.uid}/employees`)
    // some firebase voodoo / magic commands here:
    // snapshot is an object that describes the data
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {

  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift})
      .then(() => console.log("Saved on Firebase database!"))
      .then(() => {
        // clear the form in the reducer after saved:
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        // navigate back to EmployeeList
        Actions.employeeList({ type: 'reset' });
      });
  };
};