import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, Alert, Pressable, Image, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../config';
import * as FileSystem from 'expo-file-system';
import { ScrollView } from 'react-native-gesture-handler';
import * as Location from 'expo-location';


const ReportOffense = () => {
  const navigation = useNavigation();
  const complaintsRef = firebase.firestore().collection('complaints');
  const [addData, setAddData] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState(null);
  const [currentAddress, setCurrentAddress] = useState('');

  const getLatLngFromAddress = async (address) => {
    try {
      const apiKey = 'AIzaSyAchwWmXCmlo2enqrMpVDNtgdPYSlPOCkg';
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${apiKey}`
      );
  
      const data = await response.json();
  
      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        return { latitude: location.lat, longitude: location.lng };
      } else {
        throw new Error('Geocoding failed');
      }
    } catch (error) {
      console.error('Error getting coordinates:', error);
      return null;
    }
  };

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
  
      // Use a reverse geocoding service to get the address from latitude and longitude
      const addressResponse = await Location.reverseGeocodeAsync({ latitude, longitude });
      const userAddress = addressResponse[0] ? addressResponse[0].name : 'Unknown';
  
      setCurrentAddress(userAddress);
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const addField = async () => {
    if (addData && addData.length > 0) {
      try {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  
        // Get latitude and longitude from the current address
        const coordinates = await getLatLngFromAddress(currentAddress);
  
        // Check if there is a video to upload
        if (image) {
          const { uri } = await FileSystem.getInfoAsync(image);
          const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
              resolve(xhr.response);
            };
            xhr.onerror = (e) => {
              reject(new TypeError('Network Request Failed..!'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
          });
  
          const filename = image.substring(image.lastIndexOf('/') + 1);
          const storageRef = firebase.storage().ref().child(filename);
          const uploadTask = storageRef.put(blob);
  
          uploadTask.on('state_changed',
            (snapshot) => {
              // handle upload progress if needed
            },
            (error) => {
              // handle error during upload
              Alert.alert('Error uploading video. Please try again.');
              console.error(error);
            },
            async () => {
              // Video uploaded successfully, get download URL
              const downloadURL = await storageRef.getDownloadURL();
  
              // Add complaint to Firestore with both text and video URL
              const data = {
                userName,
                phoneNumber,
                textComplaint: addData,
                videoURL: downloadURL,
                createdAt: timestamp,
                currentAddress: currentAddress || null,
                latitude: coordinates?.latitude || null,
                longitude: coordinates?.longitude || null,
              };
  
              await complaintsRef.add(data);
  
              // Clear state and show success message
              setUserName('');
              setPhoneNumber('');
              setAddData('');
              setImage(null);
              setCurrentAddress('');
              Keyboard.dismiss();
              Alert.alert("Success", "Your complaint submitted successfully...!");
            }
          );
        } else {
          // Add complaint to Firestore with only text
          const data = {
            textComplaint: addData,
            createdAt: timestamp,
            currentAddress: currentAddress || null,
            latitude: coordinates?.latitude || null,
            longitude: coordinates?.longitude || null,
          };
  
          await complaintsRef.add(data);
  
          // Clear state and show success message
          setAddData('');
          setCurrentAddress('');
          Keyboard.dismiss();
          Alert.alert("Success", "Your complaint submitted successfully...!");
        }
      } catch (error) {
        Alert.alert('Error submitting complaint. Please try again.');
        console.error(error);
      }
    } else {
      Alert.alert("Warning", "Please enter your complaint before submitting...!");
    }
  };
  

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#071e3d', height: 1300 }}>
        <View style={{ left:20, backgroundColor: '#29465B', width: 350, borderRadius: 20, height: 500, top: 50 }}>
          <Text style={{ fontWeight: 'bold', marginTop: 10, color: '#DEC20B', fontSize: 35, textAlign: 'center' }}> Write a Complaint</Text>
          <View style={styles.formContainer}>
            <View style={{ height: 300, marginTop: 30 }}>
              <TextInput
                style={styles.input}
                placeholder={'Write Your complain here...!'}
                placeholderTextColor='white'
                onChangeText={(heading) => setAddData(heading)}
                value={addData}
                multiline={true}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
              />
            </View>
          </View>
        </View>
        <View style={{ height: 50, width:350,marginTop: 60, marginLeft:35, borderRadius:0}}>
          <TextInput
            style={styles.input}
            placeholder={'Enter Your Name...!'}
            placeholderTextColor='white'
            onChangeText={(name) => setUserName(name)}
            value={userName}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
          />
        </View>
        <View style={{ height: 50, marginTop: 20, marginLeft:35,borderRadius: 50 }}>
          <TextInput
            style={styles.input}
            placeholder={'Enter Your Phone Number...!'}
            placeholderTextColor='white'
            onChangeText={(number) => setPhoneNumber(number)}
            value={phoneNumber}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
            keyboardType='numeric'
          />
        </View>
        <View style={{ height: 300, width: 350, backgroundColor: '#29465B', marginTop: 30, borderRadius: 10, left:20 }}>
          <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
            <Image style={{ alignItems: 'center', right: 14, marginTop:-20 }} source={require("../assets/i12.png")} />
            <Text style={styles.text1}> Click here to upload proves</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            {image && <Image source={{ uri: image }} style={{ width: 250, height: 250, top: -220, left:30, borderRadius:50 }} />}
          </View>
        </View>
        <TextInput
          style={{height: 50, width: 350, backgroundColor: '#29465B', marginTop: 20, borderRadius: 50, left:20 }}
          placeholder={'Enter Your Current Address...!'}
          placeholderTextColor='white'
          onChangeText={(address) => setCurrentAddress(address)}
          value={currentAddress}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
          textAlign='center'
        />
      <TouchableOpacity style={styles.button1} onPress={getCurrentLocation}>
        <Text style={styles.B1}>Get Current Location</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={addField}>
                <Text style={styles.B1}>Submit Complaint</Text>
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
  formContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: -40,
    height:300
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
    textAlign: 'center',
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
  selectButton: {
    borderRadius: 5,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 100,
    left: 150
  },
  buttonText: {
    color: '#071e3d',
    fontSize: 20,
    fontWeight: 'bold',
    width: 100,
    textAlign: 'center'
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: -10,
    marginLeft: 25
  },
  text: {
    color: '#DEC20B',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
    top: 20
  },
  text1: {
    color: '#DEC20B',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    top: 20,
    width: 300
  }
});

export default ReportOffense;
