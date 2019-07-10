import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    // <View style={styles.containerStyle}>
    // below allows for you to optionally pass in different styles that overide the ones coded here in this file:
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

// export default CardSection;
export { CardSection };
