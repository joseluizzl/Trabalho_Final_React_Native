import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container: {
      flex: 1,
  },
  container2: {
    flex: 1,
    paddingHorizontal: 40,

  },
  imageBackground: {
      flex: 1,
      justifyContent: 'flex-end',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70
  },
  imageLogo: {
    width: 500,
    height: 500,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  }
})