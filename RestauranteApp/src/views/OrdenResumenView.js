import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PedidoContext from '../context/pedido/pedidoContext';
import globalStyle from '../styles/global';
import PedidoBox from '../components/PedidoBox';
import FloatingButton from '../components/FloatingButton';
import {db} from '../firebase/firebaseConfig';
import Indicador from '../components/Indicador';

const OrdenResumenView = ({navigation}) => {
  const {pedidos} = useContext(PedidoContext);
  const [isLoading, setIsLoading] = useState(false);
  const calcularTotal = () => {
    const total = pedidos.reduce((acc, cur) => {
      return acc + cur.total;
    }, 0);
    return total;
  };

  const goMenu = () => {
    navigation.navigate('Menu');
  };

  const confirmarPedido = () => {
    Alert.alert('Revisa el pedido', 'Una vez aceptado no se puede modificar', [
      {text: 'Revisar'},
      {
        text: 'Aceptar',
        onPress: guardarPedido,
      },
    ]);
  };

  const guardarPedido = async () => {
    const newPedido = {
      tiempoEntrega: 0,
      isCompletado: false,
      total: Number(calcularTotal()),
      orden: pedidos,
      fechaCreacion: Date.now(),
    };
    setIsLoading(true);
    try {
      const pedido = await db.collection('orden').add(newPedido);
      console.warn(pedido.id);
      navigation.navigate('OrdenProgreso', {id: pedido.id});
    } catch (error) {
      console.warn(error);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={globalStyle.titulo}>Resumen</Text>
      <FlatList
        data={pedidos}
        renderItem={({item}) => <PedidoBox pedido={item} />}
      />
      <View style={styles.totalContent}>
        <Text style={styles.total}>Total: ${calcularTotal()}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={globalStyle.btn}
        onPress={goMenu}>
        <Text style={globalStyle.btnText}>Seguir pidiendo</Text>
      </TouchableOpacity>
      <FloatingButton onPress={confirmarPedido} />
      {isLoading && <Indicador />}
    </View>
  );
};

export default OrdenResumenView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  totalContent: {
    padding: 10,
    alignItems: 'center',
  },
  total: {
    fontSize: 20,
  },
});
