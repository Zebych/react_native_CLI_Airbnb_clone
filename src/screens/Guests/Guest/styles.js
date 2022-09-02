import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#afacac',
  },
  ageCategory: {
    fontWeight: 'bold',
  },
  categoryDescription: {
    color: '#afacac',
  },
  buttonBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: '#afacac',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  signs: {
    fontSize: 20,
  },
});

export default styles;
