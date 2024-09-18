import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cotizacion = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE} = resultado;
  return (
    <View style={styles.cotizacion}>
      <Text style={styles.texto}>Precio del bitcoin:
        <Text style={styles.valor}> {PRICE}</Text>
      </Text>
      <Text style={styles.texto}>Precio mas alto del dia:
        <Text style={styles.valor}> {HIGHDAY}</Text>
      </Text>
      <Text style={styles.texto}>Precio mas bajo del dia:
        <Text style={styles.valor}> {LOWDAY}</Text>
      </Text>
      <Text style={styles.texto}>Ultima actualizacion:
        <Text style={styles.valor}> {LASTUPDATE}</Text>
      </Text>
      
    </View>
  )
}

export default Cotizacion

const styles = StyleSheet.create({
  cotizacion: {
    backgroundColor: '#2ecc71',
    padding: 10,
    margin: 10,
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular'
  },
  valor: {
    fontWeight: 'normal'
  }
})
