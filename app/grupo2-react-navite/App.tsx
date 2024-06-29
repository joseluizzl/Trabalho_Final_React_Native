import { Routes } from "./src/Routes";
import { UserProvider } from "./src/context/userContext";

export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
   
    
  );
}




// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import GameScreen from './screens/gameScreen';
// import { TelaLogin } from './src/pages/TelaLogin';

// const App: React.FC = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <GameScreen /> */}
//     <TelaLogin />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

