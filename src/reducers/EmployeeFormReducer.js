import {
  EMPLOYEE_UPDATE
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
    default:
      return state;
  }
};