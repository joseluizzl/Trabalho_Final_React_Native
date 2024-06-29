import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex:1,
  },

 
  img: {
    flex:1,
    justifyContent: 'center',
    resizeMode:"cover",
    width:"100%", 
  },

  container_playerDeck:{
    justifyContent: 'flex-end',
  },
  container_playerDeck_touch:{
    marginBottom: 40, 
    backgroundColor:"#000ff590",
    
  },
  deck_image:{
    height:50,
    width: 50,
    marginHorizontal: 10
  },

  container_computerDeck:{
    flex: 1,
    justifyContent: 'flex-start', 
    marginTop: 40, 
    backgroundColor:"#111ff590",
  },

});
