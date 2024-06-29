import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    width: 280,
    padding: 10,
    margin: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  type: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  image: {
    resizeMode: 'contain',
    width: 140,
    height: 140,
  },
  loadingContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ scaleX: 3 }, {scaleY: 3}, {translateX: -50}, {translateY: -50}],
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
  container_attributes:{
    width:"100%",
    backgroundColor:"#ffffff80",
    padding:5,
    gap:1,
    borderRadius:5
  },
  attributes_text:{
    fontSize:12
  },
  attributes_btn:{
    flexDirection:"row",
    alignItems:"center",
    gap:20,
    borderWidth:1,
    borderRadius:2,
    padding:2
  },
  attributes_img:{
    width:11,
    height:11
  }
});

export default styles