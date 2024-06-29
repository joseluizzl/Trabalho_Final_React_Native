import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    padding: 20,
    margin: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'Black',
    marginBottom: 20,
  },
  integrantes:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'Black',
    marginBottom:20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'Black',
  },
  container_img:{
    width:"100%",
    justifyContent:"flex-start",
    flexDirection:'row',
    alignItems:"center",
    gap: 20,
    marginBottom:20
  },
  img:{
    width:30,
    height: 30
  }
})