import React, {useContext} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import PlatilloBox from './PlatilloBox';
import {useNavigation} from '@react-navigation/native';
import PlatilloContext from '../context/platillo/platilloContext';

const PlatilloList = ({platillos}) => {
  const navigation = useNavigation();
  const {activePlatillo} = useContext(PlatilloContext);

  const goDetalle = item => {
    activePlatillo(item);
    navigation.navigate('MenuDetalle');
  };

  return (
    <FlatList
      data={platillos}
      renderItem={({item, index}) => (
        <TouchableOpacity activeOpacity={0.7} onPress={() => goDetalle(item)}>
          <PlatilloBox platillo={item} index={index} />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default PlatilloList;
