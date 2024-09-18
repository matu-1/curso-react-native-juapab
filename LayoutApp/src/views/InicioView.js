import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

const InicioView = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={require('../assets/img/bg.jpg')} />
      <View style={styles.imagenHori}>
        <Text style={styles.titulo}>Que hay en paris</Text>
        <ScrollView horizontal>
          <Image style={styles.imgActi} source={require('../assets/img/actividad1.jpg')} />
          <Image style={styles.imgActi} source={require('../assets/img/actividad2.jpg')} />
          <Image style={styles.imgActi} source={require('../assets/img/actividad3.jpg')} />
          <Image style={styles.imgActi} source={require('../assets/img/actividad4.jpg')} />
          <Image style={styles.imgActi} source={require('../assets/img/actividad5.jpg')} />
        </ScrollView>
        <Text style={styles.titulo}>Mejores</Text>
        <View>
          <Image style={styles.mejor} source={require('../assets/img/mejores1.jpg')} />
          <Image style={styles.mejor} source={require('../assets/img/mejores2.jpg')} />
          <Image style={styles.mejor} source={require('../assets/img/mejores3.jpg')} />
        </View>
        <Text style={styles.titulo}>Hospedaje</Text>
        <View style={styles.hospeList}>
          <Image style={styles.hospe} source={require('../assets/img/hospedaje1.jpg')} />
          <Image style={styles.hospe} source={require('../assets/img/hospedaje2.jpg')} />
          <Image style={styles.hospe} source={require('../assets/img/hospedaje3.jpg')} />
        </View>
      </View>
    </ScrollView>
  )
}

export default InicioView

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  img: {
    width: '100%',
    height: 200,
  },
  imagenHori: {
    marginBottom: 10,
    marginHorizontal: 5,
  },
  titulo: {
    fontSize: 16,
    marginVertical: 10
  },  
  imgActi: {
    height: 220,
    width: 150,
    marginRight: 5
  },
  mejor: {
    width: '100%',
    height: 220,
    marginBottom: 5
  },
  hospeList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  hospe: {
    height: 220,
    width: '49%',
    marginBottom: 5
  },
})