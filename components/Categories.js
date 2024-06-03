import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const categories = [
  {
    id: '1',
    title: 'Exercise',
    description: '12 Tasks',
    image: require('../images/exercise.png'),
  },
  {
    id: '2',
    title: 'Study',
    description: '12 Tasks',
    image: require('../images/study.png'),
  },
  {
    id: '3',
    title: 'Code',
    description: '12 Tasks',
    image: require('../images/code.png'),
  },
  {
    id: '4',
    title: 'Cooking',
    description: '12 Tasks',
    image: require('../images/Cook.png'),
  },
  {
    id: '5',
    title: 'Hobbies',
    description: '12 Tasks',
    image: require('../images/hobbies.png'),
  },
  {
    id: '6',
    title: 'Research',
    description: '12 Tasks ',
    image: require('../images/research.png'),
  },
  {
    id: '7',
    title: 'Projects',
    description: '12 Tasks',
    image: require('../images/projects.png'),
  },
  {
    id: '8',
    title: 'Network',
    description: '12 Tasks',
    image: require('../images/network.png'),
  },
  {
    id: '9',
    title: 'Games',
    description: '12 Tasks',
    image: require('../images/games.png'),
  },
];

export default function Categories() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
        <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
      <Image source={item.image} style={styles.cardImage} />
      
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 , marginBottom:20, fontWeight:'bold'}}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginRight: 16,
    width: 190,
    height:210
  },
  cardImage: {
    width: 151,
    height:132,
    resizeMode:'center',
    alignContent:'center',
    alignItems:'center',
    marginLeft:15,
  },
  cardContent: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
    marginTop:-8,
  },
});
