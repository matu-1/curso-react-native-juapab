import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import CitaBox from './CitaBox'

const CitaList = ({ citas, eliminarCita}) => {
  return (
    <FlatList 
      data={citas}
      renderItem={({item}) => (
        <CitaBox 
          eliminarCita={eliminarCita}
          cita={item} 
        />
      )}
      keyExtractor={((item) => item.id.toString())}
    />
  )
}

export default CitaList;

const styles = StyleSheet.create({})
