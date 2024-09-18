import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criptomoneda App</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
  titulo: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Lato-Black'
  }
})
