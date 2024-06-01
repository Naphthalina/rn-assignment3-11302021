import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting />
      <SearchBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    
  },
});
