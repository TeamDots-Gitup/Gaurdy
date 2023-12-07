import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, FlatList, Pressable, Image } from 'react-native';
import { firebase } from '../config';
import { Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const notificationRef = firebase.firestore().collection('notification');

  useEffect(() => {
    const unsubscribe = notificationRef.onSnapshot(
      querySnapshot => {
        const notifications = [];
        querySnapshot.forEach((doc) => {
          const { heading, textNotification, imageURL } = doc.data();
          notifications.push({
            heading,
            textNotification,
          });
        });

        console.log('Fetched notifications:', notifications);
        setNotifications(notifications);
      },
      error => {
        console.error('Error fetching notifications:', error);
        Alert.alert('Error', 'Failed to fetch notifications. Please try again.');
      }
    );

    return () => {
      console.log('Component unmounted');
      unsubscribe();
    };
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
    <View style={{ marginTop: 0, backgroundColor: '#071e3d' }}>
      <Text style={{ color: 'yellow', textAlign: 'center', fontSize: 30, top: 40 }}> Text Notifications </Text>
      <FlatList
        style={{ height: '100%' }}
        data={notifications}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable
            style={styles.collection}
          >
            <View style={styles.innerContainer}>
              <Text style={styles.heading}>{item.heading}</Text>
              <Text style={styles.textNotification}>{item.textNotification}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    height:1500,
    backgroundColor: '#071e3d',
  },
  collection: {
    backgroundColor: '#071e3d',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    top: 50,
    flex:1,
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#29465B',
    height:160
  },
  textNotification: {
    fontWeight: '300',
    color: 'white',
    fontSize: 20,
    width: 200,
    marginTop: 10,
    left: -40,
    fontStyle: 'italic'
  },
  heading: {
    fontWeight: '300',
    color: 'white',
    fontSize: 20,
    top: 10,
    left: -80,
    fontStyle: 'italic',
    fontWeight: '500',
  },
});
