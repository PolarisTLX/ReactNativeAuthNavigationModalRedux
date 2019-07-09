import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  /* props.children is to render any components that get PASSED to this */
  /* In Other Words: passed components show up as props.children */
  return (
    <View style={styles.constainerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  constainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    // shadow likely does not work on android:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

// export default Card;
export { Card };