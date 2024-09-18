import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const InicioView = ({ navigation }) => {
  const info = {
    nombre: 'matias',
    edad: 23
  }

  console.log('nosotors app');

  return (
    <View style={styles.container}>
      <Text>Inicio</Text>
      <Button 
        title="ir a nosotros" 
        onPress={() => navigation.navigate('Nosotros', info) } 
      />
    </View>
  )
}

export default InicioView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
