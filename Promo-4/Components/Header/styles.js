import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  }
});

export default styles;