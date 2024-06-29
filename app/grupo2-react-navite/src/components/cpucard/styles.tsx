import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 250,
    padding: 10,
    margin: 10,
    marginTop: 30
  },
  image: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
  },
  loadingContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ scaleX: 3 }, { scaleY: 3 }, { translateX: -50 }, { translateY: -50 }],
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  activityIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    width: 200,
    height: 200,
  },
  name: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 150,
    marginBottom: 10,
  },
});

export default styles;