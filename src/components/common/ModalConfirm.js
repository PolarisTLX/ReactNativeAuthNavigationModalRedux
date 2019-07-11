import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const ModalConfirm = ({ visible, children, onAccept, onDecline }) => {
  return ( 
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={styles.modalStyle}>

        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>
            {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>

      </View>
    </Modal>
  );
};

const styles = {
  modalStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center',
  }
};
 
export { ModalConfirm };