import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main">
          <Scene key="employeeList" component={EmployeeList} title="Employee List" />
          <Scene key="employeeDetail" title="Employee Detail" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;