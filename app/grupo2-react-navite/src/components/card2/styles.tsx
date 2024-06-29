import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    width:"100%",
    height: 450,
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  type: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  image: {
    resizeMode:"contain",
    width: 100,
    height: 100,
    marginBottom:16
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
    padding:10,
    gap:5,
    borderRadius:10
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
    padding:5
  },
  attributes_img:{
    width:12,
    height:12
  }
});

export default styles