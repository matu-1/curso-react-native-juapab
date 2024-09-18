import React, {useEffect, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import PlatilloContext from '../context/platillo/platilloContext';
import Indicador from '../components/Indicador';
import PlatilloList from '../components/PlatilloList';

const MenuView = () => {
  const {isLoading, platillos, getAllPlatillos} = useContext(PlatilloContext);

  useEffect(() => {
    getAllPlatillos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <Indicador />}
      <PlatilloList platillos={platillos} />
    </View>
  );
};

export default MenuView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  indicador: {
    position: 'absolute',
    bottom: 20,
    right: 0,
  },
});
