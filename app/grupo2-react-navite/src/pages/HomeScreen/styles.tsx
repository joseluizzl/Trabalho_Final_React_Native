import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom:50
  },
  button: {
    backgroundColor: '#ff000090',
    padding: 10,
    marginVertical: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    height: 60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  status_bar:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    gap:30,
    padding:10,
    backgroundColor:"#ff000050",
    borderBottomWidth: 2,
    borderTopWidth:2,
    borderColor: 'black',
    marginTop: 20 
  },
  status_img:{
    height:40,
    width:30
  },
  status_img_exit:{
    tintColor:"#fff"
  },
  text_bar:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  exit_gif:{
    marginBottom:60
  }
});