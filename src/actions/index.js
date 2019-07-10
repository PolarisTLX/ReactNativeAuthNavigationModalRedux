import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
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

// before "cleaning up this code" with the helper(s) below:
// export const loginUser = ({ email, password }) => {
//   return (dispatch) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(user => {
//         // the fact that we can have this 'dispatch' and manually call ONLY AFTER the '.then' is what makes redux thunk work in asynchronous fasion:
//         dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
//       })
//       .catch(() => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(user => {
//             dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
//           });
//       });
//   };
// };

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
    // the fact that we can have this 'dispatch' and manually call ONLY AFTER the '.then' is what makes redux thunk work in asynchronous fasion:
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        console.log("'catch' case was triggered - good to keep this log here to debug the successful 'then' case");
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  // the fact that we can have this 'dispatch' and manually call ONLY AFTER the '.then' is what makes redux thunk work in asynchronous fasion:
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  // now that user is logged in, 
  // this is how to navigate to our <Scene> that we gave key="employeeList":
  Actions.employeeList();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
}