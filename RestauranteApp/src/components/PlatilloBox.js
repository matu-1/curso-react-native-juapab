import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PlatilloContext from '../context/platillo/platilloContext';

const PlatilloBox = ({platillo, index}) => {
  const {platillos} = useContext(PlatilloContext);
  const {categoria, descripcion, nombre, precio, imagen} = platillo;

  return (
    <>
      {platillos[index - 1]?.categoria !== categoria && (
        <Text style={styles.categoria}>{categoria}</Text>
      )}
      <View style={styles.platillo}>
        <Image style={styles.img} source={{uri: imagen}} />
        <View style={styles.platilloBody}>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.descripcion}>{descripcion}</Text>
          <Text style={styles.descripcion}>${precio}</Text>
        </View>
      </View>
    </>
  );
};

export default PlatilloBox;

const styles = StyleSheet.create({
  platillo: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  img: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  platilloBody: {
    paddingLeft: 10,
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
