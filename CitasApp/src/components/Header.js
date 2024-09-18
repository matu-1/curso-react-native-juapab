import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({titulo}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  titulo: {
    color: 'white',
    fontSize: 18
  }
});
