import React, {useRef} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import globalStyle from '../styles/global';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderAnimaView = () => {
  const item = {titulo: 'Super an'};
  const datos = Array(35).fill(item);
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerHeightMax = 200;
  const headerHeightMin = 56;
  const dif = headerHeightMax - headerHeightMin;
  const newHeight = Animated.diffClamp(scrollY, 0, dif);
  const headerSize = scrollY.interpolate({
    inputRange: [0, dif],
    outputRange: [headerHeightMax, headerHeightMin],
    extrapolate: 'clamp',
  });
  const opacity = scrollY.interpolate({
    inputRange: [0, dif],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const leftTitulo = scrollY.interpolate({
    inputRange: [0, dif],
    outputRange: [10, 40],
    extrapolate: 'clamp',
  });

  return (
    <View style={globalStyle.container}>
      <Animated.View style={[styles.header, {height: headerSize}]}>
        <View style={styles.btns}>
          <Icon name="arrow-back" color="white" size={20} />
        </View>
        <Animated.Image
          style={[styles.img, {opacity}]}
          source={{
            uri:
              'https://www.playerone.vg/wp-content/uploads/2020/01/1-12-e1578282709317.jpg',
          }}
        />
        <Animated.Text style={[styles.headerText, {left: leftTitulo}]}>
          Header
        </Animated.Text>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: headerHeightMax}}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}>
        {datos.map((data, i) => (
          <View key={i} style={styles.caja}>
            <Text>
              {data.titulo}-{i}
            </Text>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default HeaderAnimaView;

const styles = StyleSheet.create({
  caja: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  header: {
    height: 56,
    justifyContent: 'flex-end',
    backgroundColor: colors.primary,
    elevation: 3,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerText: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    margin: 0,
    padding: 0,
    left: 10,
    bottom: 15,
  },
  btns: {
    position: 'absolute',
    top: 17,
    left: 10,
    zIndex: 2,
  },
});
