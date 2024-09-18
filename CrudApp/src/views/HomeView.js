import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Text>Home view</Text>
      <TextInput
        underlineColorAndroid="crimson"
        multiline
        style={styles.input}
        placeholder="Ej. matias"
      />
      <TextInput
        underlineColorAndroid="crimson"
        style={styles.input}
        placeholder="Ej. matias"
      />
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
    // height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});
