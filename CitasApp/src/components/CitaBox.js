import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CitaBox = ({cita, eliminarCita}) => {
  const { paciente, propietario, sintomas, id } = cita;

  const dialogoEliminar = () => {
    eliminarCita(id);
  }

  return (
    <View style={styles.cita}>
      <View style={styles.citaText}>
        <Text style={styles.label}>Paciente</Text>
        <Text>{paciente}</Text>
      </View>
      <View style={styles.citaText}>
        <Text style={styles.label}>Dueño</Text>
        <Text>{propietario}</Text>
      </View>
      <View style={styles.citaText}>
        <Text style={styles.label}>Sintomas</Text>
        <Text>{sintomas}</Text>
      </View>
      <TouchableOpacity
        onPress={dialogoEliminar}
        activeOpacity={0.8}
        style={styles.btn}  
      >
        <Text style={styles.btnText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CitaBox

const styles = StyleSheet.create({
  cita: {
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
  },
  citaText: {
    marginBottom: 10
  },
  label: {
    color: 'gray',
  },
  btn: {
    padding: 10,
    backgroundColor: "#262626",
    elevation: 3
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
})
