import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animacion2View = () => {
  const anima = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing( anima, {
      toValue: 500,
      duration: 1000,
    }).start();
  }, [])

  const rotacion = anima.interpolate({
    inputRange: [0, 500],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.caja, { width: anima, transform: [{ rotate: rotacion }]}]} />
    </View>
  )
}

export default Animacion2View

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'crimson',
    elevation: 1
  }
})
