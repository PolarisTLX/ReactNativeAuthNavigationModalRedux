import firebase from 'firebase';
import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
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
    firebase.auth().signInWithEmailAndPassword(email, password)
    // the fact that we can have this 'dispatch' and manually call ONLY AFTER the '.then' is what makes redux thunk work in asynchronous fasion:
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
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
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
}