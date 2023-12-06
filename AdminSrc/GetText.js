import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Alert, ScrollView, FlatList, Pressable } from 'react-native';
import { firebase } from '../config';
import { Video } from 'expo-av';

const GetText = () => {

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('complaints');

  useEffect(() => {
    const unsubscribe = todoRef.onSnapshot(
      querySnapshot => {
        const users = [];
        querySnapshot.forEach((doc) => {
          const { userName, phoneNumber, currentAddress, textComplaint, videoURL } = doc.data();
          users.push({
            userName,
            phoneNumber,
            currentAddress,
            textComplaint,
            videoURL,
          });
        });
        console.log('Fetched users:', users); // Log fetched data
        setUsers(users);
      },
      error => {
        console.error('Error fetching complaints:', error);
        Alert.alert('Error', 'Failed to fetch complaints. Please try again.');
      }
    );
  
    // Cleanup function to unsubscribe from the listener when the component is unmounted
    return () => {
      console.log('Component unmounted'); // Log when component is unmounted
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, marginTop:0, backgroundColor:'#343512' }}>
      <Text style={{color:'yellow', textAlign:'center', fontSize:30, top:40}}> Text Complaints </Text>
      <FlatList
        style={{ height: '100%' }}
        data={users}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable
            style={styles.collection}
          >
            <View style={styles.innerContainer}>
              <Text style={styles.a1}> Name </Text>
              <Text style={styles.userName}>{item.userName}</Text>
              <Text style={styles.a2}> Phone Number</Text>
              <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
              <Text style={styles.a3}> Current Gio Location </Text>
              <Text style={styles.itemHeading}>{item.currentAddress}</Text>
              <Text style={styles.a4}> Complaint </Text>
              <Text style={styles.textComplaint}>{item.textComplaint}</Text>
              <Video
                source={{ uri: item.videoURL }}
                style={styles.video}
                resizeMode="contain"
                useNativeControls
              />
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}

export default GetText;

const styles = StyleSheet.create({
  collection: {
    backgroundColor: '#343512',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    top:50
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor:'#29465B',
  },
  itemHeading: {
    fontWeight: '300',
    color:'white',
    textAlign:'right',
    fontSize:20,
    marginTop:-23,
    left:60
  },
  textComplaint: {
    fontWeight: '300',
    color:'white',
    fontSize:20,
    width:200,
    marginTop:-25,
    left:110
  },
  userName: {
    fontWeight: '300',
    color:'white',
    fontSize:20,
    top:10,
    left:60
  },
  phoneNumber: {
    fontWeight: '300',
    color:'white',
    fontSize:20,
    marginTop:-13,
    left:60
  },
  video: {
    width: 300,
    height: 600,
    marginTop: 10,
  },
  a1:{
    fontStyle:'bold',
    color:'white',
    fontSize:20,
    right:148,
    top:30
  },
  a2:{
    fontStyle:'bold',
    color:'white',
    fontSize:20,
    right:115,
    top:10
  },
  a3:{
    fontStyle:'bold',
    color:'white',
    fontSize:20,
    right:90
  },
  a4:{
    fontStyle:'bold',
    color:'white',
    fontSize:20,
    right:130
  }
});
