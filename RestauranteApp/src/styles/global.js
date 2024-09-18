import {StyleSheet} from 'react-native';
import colors from './colors';

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
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
});

export default globalStyle;
