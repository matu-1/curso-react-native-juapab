import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animacion1View = () => {
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing( fadeIn, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={{opacity: fadeIn}}>
        <Text style={styles.titulo}>Animacion timing</Text>
      </Animated.View>
    </View>
  )
}

export default Animacion1View

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10
  }
})
