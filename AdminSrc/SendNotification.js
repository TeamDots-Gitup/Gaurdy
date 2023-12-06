import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { firebase } from '../config';
import { ScrollView } from 'react-native-gesture-handler';

const ReportOffense = () => {
  const navigation = useNavigation();
  const complaintsRef = firebase.firestore().collection('notification');
  const [heading, setHeading] = useState('');
  const [textNotification, setTextNotification] = useState('');

  const addField = async () => {
    if (heading && heading.length > 0) {
      try {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();

        // Add complaint to Firestore with only text
        const data = {
          heading,
          textNotification,
          createdAt: timestamp,
        };

        await complaintsRef.add(data);

        // Clear state and show success message
        setHeading('');
        setTextNotification('');
        Alert.alert("Success", "Notification Uploaded");
      } catch (error) {
        Alert.alert('Error submitting notification. Please try again.');
        console.error(error);
      }
    } else {
      Alert.alert("Warning", "Please enter your notification before submitting...!");
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: '#071e3d', height: 1300 }}>
          <View style={{ left:20, width: 350, borderRadius: 20, height:300, top: 50 }}>
            <Text style={{ fontWeight: 'bold', marginTop: 10, color: '#DEC20B', fontSize: 35, textAlign: 'center' }}> Nofication Updates </Text>
            <View style={{ height: 50, marginTop: 30, left:15, width:350 }}>
              <TextInput
                style={styles.input}
                placeholder={'Heading...!'}
                placeholderTextColor='white'
                onChangeText={(heading) => setHeading(heading)}
                value={heading}
                underlineColorAndroid='transparent'
                autoCapitalize='words'
              />
            </View>
          </View>
          <View style={{ height: 120, width:350,marginTop: -50, marginLeft:35, borderRadius:0}}>
            <TextInput
              style={styles.input2}
              placeholder={'Type Your Notification Here...!'}
              placeholderTextColor='white'
              onChangeText={(text) => setTextNotification(text)}
              value={textNotification}
              multiline={true}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
            />
          </View>
          <TouchableOpacity style={styles.button1} onPress={addField}>
            <Text style={styles.B1}>Submit Notification</Text>
          </TouchableOpacity>
          <Pressable
            style={styles.button2}
            onPress={() => navigation.navigate("Dashboard")}>
            <Text style={styles.buttonText}> </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#071e3d',
  },
  input: {
    borderRadius: 5,
    overflow:'hidden',
    backgroundColor: '#29465B',
    paddingLeft: 16,
    flex: 1,
    marginRight:5,
    right:15,
    width: 350,
    top: 10,
    textAlign: 'left',
    color: 'white',
    fontSize:24
  },
  input2: {
    borderRadius: 5,
    overflow:'hidden',
    backgroundColor: '#29465B',
    paddingLeft: 16,
    height:150,
    marginRight:5,
    right:15,
    width: 350,
    top:-30,
    textAlign: 'left',
    color: 'white',
    fontSize:24
  },
  button1: {
    height: 50,
    borderRadius: 15,
    backgroundColor: '#DEC20B',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 60,
  },
  button2: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 160
  },
  B1: {
    fontSize: 22,
  },
  buttonText: {
    color: '#071e3d',
    fontSize: 20,
    fontWeight: 'bold',
    width: 100,
    textAlign: 'center'
  },
});

export default ReportOffense;
