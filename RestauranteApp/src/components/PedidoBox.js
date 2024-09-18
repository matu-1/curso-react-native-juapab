import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PedidoContext from '../context/pedido/pedidoContext';

const PedidoBox = ({pedido}) => {
  const {nombre, precio, imagen, cantidad, id} = pedido;
  const {eliminarPedido} = useContext(PedidoContext);

  const confirmarEliminar = () => {
    Alert.alert('Eliminar', 'Esta seguro de eliminar el pedido?', [
      {text: 'Cancelar'},
      {text: 'Aceptar', onPress: () => eliminarPedido(id)},
    ]);
  };

  return (
    <View style={styles.pedido}>
      <Image style={styles.img} source={{uri: imagen}} />
      <View style={styles.platilloBody}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.descripcion}>{cantidad}</Text>
        <Text style={styles.descripcion}>${precio}</Text>
      </View>
      <Icon
        onPress={confirmarEliminar}
        name="trash"
        size={25}
        color="crimson"
      />
    </View>
  );
};

export default PedidoBox;

const styles = StyleSheet.create({
  pedido: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    flex: 1,
  },
  img: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  platilloBody: {
    paddingLeft: 10,
    flex: 1,
  },
  nombre: {
    color: 'black',
    fontSize: 15,
  },
  descripcion: {
    color: 'gray',
  },
  categoria: {
    textTransform: 'uppercase',
    marginTop: 5,
    color: 'gray',
  },
});
