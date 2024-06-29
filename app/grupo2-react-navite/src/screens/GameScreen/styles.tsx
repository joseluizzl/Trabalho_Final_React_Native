import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  gameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opponentCardContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
    top:'-6%',
  },
  playerDeckContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  cardWrapper: {
    marginHorizontal: 5,
    height: 420,
    marginTop: '12%',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
});


export default styles