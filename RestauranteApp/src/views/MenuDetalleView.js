import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import PlatilloContext from '../context/platillo/platilloContext';
import colors from '../styles/colors';
import globalStyle from '../styles/global';

const MenuDetalleView = ({navigation}) => {
  const {platillo} = useContext(PlatilloContext);
  const {categoria, descripcion, nombre, precio, imagen} = platillo;

  const goOrdenar = () => {
    navigation.navigate('OrdenCreate');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={globalStyle.titulo}>{nombre}</Text>
        <Image style={styles.img} source={{uri: imagen}} />
        <Text style={styles.label}>Descripcion</Text>
        <Text style={styles.texto}>{descripcion}</Text>
        <Text style={styles.label}>Precio</Text>
        <Text style={styles.texto}>${precio}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{categoria}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btn}
        onPress={goOrdenar}>
        <Text style={styles.btnText}>Seleccionar Platillo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuDetalleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-between',
  },
  img: {
    height: 250,
    width: '100%',
    marginBottom: 10,
  },
  label: {
    color: 'gray',
    fontSize: 16,
  },
  texto: {
    marginBottom: 20,
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  badge: {
    backgroundColor: 'crimson',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: 'white',
  },
});
