import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {

  const { 
    containerStyle,
    labelStyle,
    inputStyle,
  } = styles;

  return ( 
    <View style={containerStyle}>
      <Text style={labelStyle}> {props.label} </Text>
      <TextInput 
        style={inputStyle}
        value={props.value}
        onChangeText={props.onChangeText}
        autoCorrect={false}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
   );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    // flex: 1 and flex: 2 below indicate proportion of space 
    // these two siblings will take up, 1/3 and 2/3 width
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
};
 
// export default Input;
export { Input };