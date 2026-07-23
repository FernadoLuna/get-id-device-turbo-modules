import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ViewIdentifier from './src/features/FintechSecurity/presentation/ViewIdentifier';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <ViewIdentifier />
      </View>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
