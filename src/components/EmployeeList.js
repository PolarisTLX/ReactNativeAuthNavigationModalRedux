import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {

  // THIS IS DEPRECATED!!! ANYTHING WITH ListView IS DEPRECATED!
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    // ds = data-source
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      // DEPRECATED!!!
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />

      // hard coded examples:
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}
 
export default connect(null, { employeesFetch })(EmployeeList);