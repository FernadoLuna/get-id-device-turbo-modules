import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ViewIdentifier from './src/features/FintechSecurity/presentation/ViewIdentifier';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffd100" />
      <View style={styles.container}>
        <ViewIdentifier />
      </View>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7d6',
  },
});

export default App;
