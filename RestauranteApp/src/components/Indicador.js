import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

const Indicador = () => {
  return (
    <View style={styles.indicador}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Indicador;

const styles = StyleSheet.create({
  indicador: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
