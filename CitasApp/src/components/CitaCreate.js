import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CitaCreate = ({agregarCita}) => {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [formValues, setFormValues] = useState({
    fecha: 'Seleccione',
    hora: 'Seleccione',
    paciente: '',
    propietario: '',
    telefono: '',
    sintomas: '',
  })

  const handleShowDate = () => {
    setShowDate(true);
  }

  const onChangeDate = (event, date) => {
    const opciones = { year: 'numeric', month: 'long', day: '2-digit'}
    setShowDate(false);
    formValuesChange('fecha', date.toLocaleDateString('es-ES', opciones));
  }

  const handleShowTime = () => {
    setShowTime(true);
  }

  const onChangeTime = (event, date) => {
    const opciones = { hour: 'numeric', minute: '2-digit', hour12: false};
    setShowTime(false);
    formValuesChange('hora', date.toLocaleTimeString('es-ES', opciones));
  }

  const formValuesChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const { fecha, hora, paciente, propietario, telefono, sintomas } = formValues;

  const isValido = () => {
    if(fecha === 'Seleccione' || hora === 'Seleccione' ||
      paciente.trim() === "" || propietario.trim() === '' ||
      telefono.trim() === '' || sintomas.trim() === '' ){
        return false
    }else {
      return true;
    }
  }

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Todos los campos son obligatorios',
      [{ text: 'Ok'}],
      {cancelable: true}
    );
  }

  const handleAgregar = () => {
    console.warn(formValues);
    if(!isValido()) return mostrarAlerta();
    formValues.id = Date.now();
    agregarCita(formValues);
  }

  return (
    <ScrollView 
      contentContainerStyle={{paddingVertical: 10}} 
      style={styles.form}
    >
      <Text style={styles.titulo}>Crear Cita</Text>
      <Text style={styles.label}>Paciente</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ej. dugi"
        onChangeText={(text) => formValuesChange('paciente', text)}
      />
      <Text style={styles.label}>Dueño</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ej. matias"
        onChangeText={(text) => formValuesChange('propietario', text)}
      />
      <Text style={styles.label}>Telefono</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ej. 78456845"
        onChangeText={(text) => formValuesChange('telefono', text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Sintomas</Text>
      <TextInput 
        style={styles.input}
        placeholder="Ej. no come"
        onChangeText={(text) => formValuesChange('sintomas', text)}
        multiline
      />
      <Text style={styles.label}>Fecha</Text>
      <TouchableOpacity
        onPress={handleShowDate}
        style={styles.input}
      >
        <Text>{fecha}</Text>
      </TouchableOpacity>
      {showDate && (
        <DateTimePicker
          testID="datePicker"
          value={new Date()}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
          locale="es-ES"
        />
      )}
      <Text style={styles.label}>Hora</Text>
      <TouchableOpacity
        onPress={handleShowTime}
        style={styles.input}
      >
        <Text>{hora}</Text>
      </TouchableOpacity>
      {showTime && (
        <DateTimePicker
          testID="TimePicker"
          value={new Date()}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChangeTime}
          locale="es-ES"
        />
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}  
        onPress={handleAgregar}
      >
        <Text style={styles.btnText}>Crear cita</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default CitaCreate

const styles = StyleSheet.create({
  form: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    paddingHorizontal: 10,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10
  },
  label: {
    color: 'gray'
  },
  input: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10
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
