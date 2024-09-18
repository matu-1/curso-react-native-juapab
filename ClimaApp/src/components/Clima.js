import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Clima = ({resultado}) => {
  if(!resultado) return null;

  const { main, weather } = resultado;

  return (
    <View style={styles.clima}>
      <Text style={styles.text}>
        <Text style={styles.actual}>{ Math.round(main.temp) }</Text> &#x2103;
        <Image 
          style={{width: 70, height: 70}}
          source={{uri: `http://openweathermap.org/img/w/${weather[0].icon}.png`}} 
        />
      </Text>
      <View style={styles.tempe}>
        <Text style={styles.text}>Min {Math.round(main.temp_min)} &#x2103; </Text>
        <Text style={styles.text}> Max {Math.round(main.temp_max)} &#x2103;</Text>
      </View>
    </View>
  )
}

export default Clima

const styles = StyleSheet.create({
  clima: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  actual: {
    fontSize: 60,
  },
  tempe: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
