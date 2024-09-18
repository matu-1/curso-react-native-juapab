import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { getTopCripto, getCriptoPrecio } from '../helpers/criptomoneda';

const Formulario = ({setResultado}) => {
  const [criptomonedas, setCriptomonedas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    moneda: '',
    criptomoneda: '',
  });

  const valuesChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  }

  useEffect(() => {
    getTopCripto().then( data => {
      console.warn(data);
      setCriptomonedas(data);
    }).catch(console.warn);

  }, [])

  const { moneda, criptomoneda } = values;

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Todos los campos son obligatorios',
      [{text: 'Ok'}],
      {cancelable: true},
    );
  }

  const cotizarPrecio = async () => {
    if(moneda.trim() === '' || criptomoneda.trim() === '')
      return mostrarAlerta();

    setResultado(null);
    setIsLoading(true);
    try {
      const resp = await getCriptoPrecio(values);
      setResultado(resp);
    } catch (error) {
      console.warn(error)
    }
    setIsLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={(text) => valuesChange('moneda', text)}
      >
        <Picker.Item label="Seleccione" value="" />
        <Picker.Item label="Dolar de EEUU" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        selectedValue={criptomoneda}
        onValueChange={(text) => valuesChange('criptomoneda', text)}
      >
        <Picker.Item label="Seleccione" value="" />
        { criptomonedas.map(({ CoinInfo: item }) => (
          <Picker.Item key={item.Id} label={item.FullName} value={item.Name} />
        ))}
      </Picker>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={cotizarPrecio}
      >
        <Text style={styles.btnText}>Cotizar</Text>
      </TouchableOpacity>
      { isLoading && <ActivityIndicator style={styles.spinner} size="large" />}
    </View>
  )
}

export default Formulario

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  label: {
    color: 'gray',
    fontFamily: 'Lato-Black',
    fontSize: 16
  },
  btn: {
    padding: 10,
    backgroundColor: '#2ecc71',
    elevation: 3,
    marginVertical: 10
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  spinner: {
    bottom: 0,
    marginVertical: 20,
  }
})
