import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    padding:20
  },
  modalView: {
    width:"100%",
    height:"100%",
    margin: 20,
    borderRadius: 20,
    justifyContent:"center",
    alignItems: 'center',
    shadowColor: '#000',
   
  },
  atributos:{
    fontSize:26
  },
   button: {
    backgroundColor:"#ffffff80",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  listBtn:{
    flexDirection:"row",
    gap:10
  }
});
