import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFromReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  // "what" comes from "what reducer":
  employeeForm: EmployeeFromReducer,
  employees: EmployeeReducer
});
