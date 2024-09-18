import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatingButton = ({onPress}) => {
  return (
    <TouchableHighlight
      underlayColor="#1abc9c"
      style={styles.btn}
      onPress={onPress}>
      <Icon name="save" color="white" size={20} />
    </TouchableHighlight>
  );
};

FloatingButton.propTypes = {
  onPress: PropTypes.func,
};

export default FloatingButton;

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 70,
    right: 10,
    width: 60,
    height: 60,
    backgroundColor: '#16a085',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  text: {
    color: 'white',
  },
});
