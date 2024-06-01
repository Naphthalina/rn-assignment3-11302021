import { Image, StyleSheet, Text, View } from 'react-native';

export default function Greeting() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
      <Text style={styles.topText}>Hello , Devs</Text>
      <Text style={styles.bottomText}>14 tasks today</Text>
      </View>
      
      <View style={styles.right}>
        <Image source={require('../images/dp.png')} style={styles.dp} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    columnGap:20,
   // backgroundColor: 'red',
    marginTop:50,
    marginLeft:20,
    marginRight:20,
   // height:90,
   // backgroundColor:'red'
    
  },
  left:{
    flex:3,
    display:'flex',
  //  backgroundColor:'white',
   // flexDirection:'column',
  },
  topText:{
   // backgroundColor:'yellow',
    fontSize:32,
    fontStyle:'bold'
  },
  bottomText:{
    fontSize:12, 
   // backgroundColor:'green',
  },
  right:{
    flex:1,
    backgroundColor:'white',
    borderRadius:60,
    
  },
  dp:{
     flex:1,
     height:50,
     width:50,
    resizeMode:'contain',
    marginLeft:17,
    marginBottom:5
  }
});
