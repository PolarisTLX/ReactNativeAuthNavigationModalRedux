import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Input, Button, ModalConfirm } from './common';

class EmployeeEdit extends Component {

  state = { showModal: false };

  // to utilize the existing employee details to this form from the employee that gets passed to here:
  // pass this employee object, and it's key:value pairs, to the reducer
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
   

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onSMSPress() {
    const { phone, shift} = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholde="Jane"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholde="555-555-5555"
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        <CardSection>
          <Text styles={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={{ flex: 1, marginTop: 10 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onSMSPress.bind(this)}>
            Send Schedule by SMS
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete Employee
          </Button>
        </CardSection>

        <ModalConfirm
          visible={this.state.showModal}
        >
          Are you sure you want to delete this?
        </ModalConfirm>
      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,  // size not working?
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  // from the reducer?
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);