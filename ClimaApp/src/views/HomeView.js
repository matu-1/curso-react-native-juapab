import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Formulario from '../components/Formulario'
import Clima from '../components/Clima';

const HomeView = () => {
  const [resultado, setResultado] = useState(null);
  console.warn(resultado);

  return (
    <View style={styles.container}>
      <Clima resultado={resultado} />
      <Formulario setResultado={setResultado} />
    </View>
  )
}

export default HomeView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    justifyContent: 'center'
  }
})
