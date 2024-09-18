import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import Header from '../components/Header'
import Formulario from '../components/Formulario'
import Cotizacion from '../components/Cotizacion'

const HomeView = () => {
  const [resultado, setResultado] = useState(null);
  
  return (
    <ScrollView>
      <Header />
      <Image style={styles.banner} source={require('../assets/img/cryptomonedas.png')} />
      <Formulario setResultado={setResultado} />
      { resultado && <Cotizacion resultado={resultado} />}
    </ScrollView>
  )
}

export default HomeView

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 150
  }
})
