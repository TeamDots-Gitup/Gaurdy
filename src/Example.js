import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '../notfication/Slider'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Notfication  </Text>
      <Slider/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#071e3d',
  },
  text:{
    color:'#DEC20B',
    textAlign:'center',
    fontSize:25,
    fontWeight:"bold",
    top:120
  },
});