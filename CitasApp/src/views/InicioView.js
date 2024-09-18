import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, } from 'react-native'
import Header from '../components/Header'
import CitaList from '../components/CitaList';
import CitaCreate from '../components/CitaCreate';

const InicioView = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [citas, setCitas] = useState([]);

  const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
  }

  const agregarCita = (cita) => {
    setCitas([cita, ...citas]);
    setShowCreate(false);
  }

  return (
    <View style={styles.container}>
      <Header titulo="Administracion de citas" />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}  
        onPress={() => setShowCreate(!showCreate)}
      >
        <Text style={styles.btnText}>{showCreate? "Volver": "Crear cita"}</Text>
      </TouchableOpacity>
      {
        showCreate?
        <CitaCreate agregarCita={agregarCita} />:
        <>
          {citas.length === 0 && <Text style={styles.mensaje}>No hay citas</Text>}
          <CitaList 
            eliminarCita={eliminarCita}
            citas={citas} 
          />
       </>
      }
    </View>
  )
}

export default InicioView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    margin: 10,
    padding: 10,
    backgroundColor: "#262626",
    elevation: 3
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  mensaje: {
    textAlign: 'center',
    fontSize: 16,
  }
})
