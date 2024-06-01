import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting />
      <View style={styles.searchContainer}>
        <View style={styles.search}>
        <SearchBar  />
        </View>
      <View style={styles.settings}>

      </View>
      </View>
      <Categories />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    
  },
  searchContainer:{
    display:'flex',
    flexDirection:'row',
    columnGap:20,
  }
  ,search:{
    flex:3
  },
  settings:{
    flex:1
  },
});
