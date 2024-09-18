import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, TouchableHighlight, Animated, Alert } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { getClima } from '../helpers/getClima';

const Formulario = ({ setResultado }) => {
  const [values, setValues] = useState({
    pais: '', ciudad: 'Las Vegas',
  });
  const scaleBtn = useRef(new Animated.Value(1)).current;

  const valuesChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  }

  const onPressIn = () =>{
    Animated.spring(scaleBtn, {
      toValue: 0.95,
    }).start();
  }

  const onPressOut = () => {
    Animated.spring(scaleBtn, {
      toValue: 1,
    }).start();
  }

  const mostrarAlerta = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [{ text: 'Ok'}])
  }

  const { pais, ciudad} = values;

  const handlebuscar = async () => {
    if(!pais.trim() || !ciudad.trim())
      return mostrarAlerta();

    try {
      const resp = await getClima(values);
      setResultado(resp);
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <View style={styles.form} >
      <TextInput 
        value={ciudad}
        style={styles.input}
        placeholder="Escribe una ciudad"
        onChangeText={ text => valuesChange('ciudad', text)}
      />
      <Picker 
        style={styles.picker}
        selectedValue={pais}
        onValueChange={(text) => valuesChange('pais', text)}
      >
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Estados Unidos" value="US" />
        <Picker.Item label="Mexico" value="MX" />
        <Picker.Item label="Argentina" value="AR" />
        <Picker.Item label="Bolivia" value="BO" />
        <Picker.Item label="Colombia" value="CO" />
        <Picker.Item label="España" value="ES" />
      </Picker>
      <TouchableWithoutFeedback
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={handlebuscar}
      >
        <Animated.View style={ [styles.btn, { transform: [{scale: scaleBtn}] }] }>
          <Text style={styles.btnText}>Button</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Formulario

const styles = StyleSheet.create({
  form: {
   
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10
  },
  picker: {
    backgroundColor: 'white',
    marginBottom: 40
  },
  btn: {
    backgroundColor: '#9b59b6',
    padding: 10,
    elevation: 3,
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
  }
})
