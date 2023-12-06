import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Alert, ScrollView, FlatList, Pressable } from 'react-native';
import { firebase } from '../config';
import { Video } from 'expo-av';

const GetOffense = () => {

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('newData');

  useEffect(() => {
    const unsubscribe = todoRef.onSnapshot(
      querySnapshot => {
        const users = [];
        querySnapshot.forEach((doc) => {
          const { textComplaint, videoURL } = doc.data();
          users.push({
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
    <View style={{ flex: 1, marginTop: 100 }}>
      <Text> Get Text Complaints </Text>
      <FlatList
        style={{ height: '100%' }}
        data={users}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable
            style={styles.collection}
          >
            <View style={styles.innerContainer}>
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

export default GetOffense;

const styles = StyleSheet.create({
  collection: {
    backgroundColor: '#343512',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  textComplaint: {
    fontWeight: '300',
  },
  video: {
    width: 300,
    height: 400,
    marginTop: 10,
  },
});
