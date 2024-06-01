import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Greeting from './components/Greeting';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import OngoingTask from './components/OngoingTask';

export default function App() {
  return (
    <ScrollView>
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
      <OngoingTask />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
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
