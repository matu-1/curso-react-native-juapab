import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Countdown from 'react-countdown';
import {db} from '../firebase/firebaseConfig';
import Indicador from '../components/Indicador';
import globalStyle from '../styles/global';

const OrdenProgresoView = ({route, navigation}) => {
  const {id} = route.params;
  const [tiempo, setTiempo] = useState(null);
  const [isCompletado, setIsCompletado] = useState(false);

  useEffect(() => {
    db.collection('orden')
      .doc(id)
      .onSnapshot(snapshot => {
        setTiempo(snapshot.data().tiempoEntrega);
        setIsCompletado(snapshot.data().isCompletado);
      });
  }, [id]);

  const renderer = ({minutes, seconds}) => {
    return (
      <Text style={styles.tiempo}>
        {minutes}:{seconds}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {tiempo == null && <Indicador />}
      {tiempo === 0 && (
        <>
          <Text style={styles.text}>Hemos recibido su orden</Text>
          <Text style={styles.text}>
            Estamos calculando el tiempo de entrega
          </Text>
        </>
      )}
      {!isCompletado && tiempo > 0 && (
        <>
          <Text style={styles.text}>Su orden estara lista en:</Text>
          <Countdown date={Date.now() + tiempo * 60000} renderer={renderer} />
        </>
      )}
      {isCompletado && (
        <>
          <Text style={styles.textCompletado}>Su orden esta lista</Text>
          <Text style={styles.textCompletado}>
            Porfavor pase a recoger su pedido
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}
            activeOpacity={0.8}
            style={globalStyle.btn}>
            <Text style={globalStyle.btnText}>Volver a menu</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default OrdenProgresoView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: 'relative',
  },
  text: {
    textAlign: 'center',
  },
  tiempo: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 10,
  },
  textCompletado: {
    textTransform: 'uppercase',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});
