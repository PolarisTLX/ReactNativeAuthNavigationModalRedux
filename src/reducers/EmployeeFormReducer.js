import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // less fancy way of doing it:
      // const newState = {};
      // newState[action.payload.prop] = action.payload.value
      // return { ...state, ...newState } //(not complete?)

      // fancy way:
      // action.payload === { prop: 'name', value: 'jane' }
      // square braces [] below is not an array, it is key-interpolation
      // '[action.payload.prop]' below gets converted into whatever gets passed
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      // reset form to be blank after an employee has been created/submitted:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      // reset form to be blank after an employee has been created/submitted:
      return INITIAL_STATE;
    default:
      return state;
  }
};