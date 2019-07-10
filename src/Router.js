import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main">
          <Scene 
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial  //the first scene out of this 'main' group of scenes
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create New Employee" />
          <Scene key="employeeDetail" title="Employee Detail" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;