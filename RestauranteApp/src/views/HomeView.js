import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';

const HomeView = ({navigation}) => {
  const goMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goMenu} activeOpacity={0.8} style={styles.btn}>
        <Text style={styles.btnText}>Crear nueva orden</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 3,
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});
