import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const NosotrosView = ({ navigation, route }) => {
  const { nombre } = route.params;

  return (
    <View style={styles.container}>
      <Text>Nombre: { nombre }</Text>
      <Button 
        title="ir a nosotros" 
        onPress={() => navigation.navigate('Home') } 
      />
    </View>
  )
}

export default NosotrosView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
