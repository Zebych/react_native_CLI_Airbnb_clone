import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 120,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 5,
    marginBottom: 20,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  postDescription: {
    paddingVertical: 5,
    backgroundColor: '#fff',
    paddingLeft: 10,
    flex: 1,
  },
  bedrooms: {
    color: '#5b5b5b',
  },
  descriptions: {
    fontSize: 18,
    lineHeight: 26,
    color: '#090808',
  },
  prices: {
    fontSize: 18,
    color: '#090808',
  },
  price: {
    fontWeight: 'bold',
  },
});

export default styles;
