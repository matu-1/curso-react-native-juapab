import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import globalStyle from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import PlatilloContext from '../context/platillo/platilloContext';
import PedidoContext from '../context/pedido/pedidoContext';

const OrdenCreateView = ({navigation}) => {
  const [cantidad, setCantidad] = useState(1);
  const {platillo} = useContext(PlatilloContext);
  const {agregarPedido} = useContext(PedidoContext);

  const {precio} = platillo;

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad === 1) return;
    setCantidad(cantidad - 1);
  };

  const calcularTotal = () => {
    return cantidad * precio;
  };

  const confirmarOrden = () => {
    Alert.alert('Esta seguro?', 'Una vez confirmado ya no se puede editar', [
      {text: 'Cancelar'},
      {text: 'confirmar', onPress: agregarOrden},
    ]);
  };

  const agregarOrden = () => {
    const orden = {
      ...platillo,
      cantidad,
      total: precio * cantidad,
    };
    console.warn(orden);
    agregarPedido(orden);
    navigation.navigate('OrdenResumen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={globalStyle.titulo}>Cantidad</Text>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnCanti}
            onPress={disminuir}>
            <Icon size={30} name="remove" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnCanti}
            onPress={incrementar}>
            <Icon size={30} name="add" color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.cantidad}>{cantidad}</Text>
        <Text style={styles.total}>Subtotal: $ {calcularTotal()}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={globalStyle.btn}
        onPress={confirmarOrden}>
        <Text style={globalStyle.btnText}>Agregar al pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrdenCreateView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  btnCanti: {
    backgroundColor: colors.primary,
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    borderRadius: 8,
  },
  cantidad: {
    textAlign: 'center',
    fontSize: 18,
  },
  total: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 20,
  },
});
