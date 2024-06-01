
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';


export default function SearchBar() {
  return (
    <View style={styles.container}>
        <TextInput style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor='black'>
        <Octicons name="search" size={24} color="black" />
        </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    marginLeft:20,
    marginRight:20,  
  },
  searchBar: {
    height: 49,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 15,
    border:1 ,
    marginBottom: 16,
    backgroundColor: 'white',
    color:'black'
   // width:353,
  },
});
