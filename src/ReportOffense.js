import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, Alert, Pressable, Image, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../config';
import * as FileSystem from 'expo-file-system';
import { ScrollView } from 'react-native-gesture-handler';

const ReportOffense = () => {
  const navigation = useNavigation();
  const complaintsRef = firebase.firestore().collection('newData');
  const [addData, setAddData] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
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
                textComplaint: addData,
                videoURL: downloadURL,
                createdAt: timestamp,
              };

              await complaintsRef.add(data);

              // Clear state and show success message
              setAddData('');
              setImage(null);
              Keyboard.dismiss();
              Alert.alert("Success", "Your complaint submitted successfully...!");
            }
          );
        } else {
          // Add complaint to Firestore with only text
          const data = {
            textComplaint: addData,
            createdAt: timestamp,
          };

          await complaintsRef.add(data);

          // Clear state and show success message
          setAddData('');
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
      <View style={{ backgroundColor: '#071e3d', height: 1000 }}>
        <View style={{ left:0, backgroundColor: '#29465B', width: 350, borderRadius: 50, height: 250, top: 50 }}>
          <Text style={{ fontWeight: 'bold', marginTop: 10, color: '#DEC20B', fontSize: 25, textAlign: 'center' }}> Report Offense</Text>
          <View style={styles.formContainer}>
            <View style={{ height: 180, marginTop: 30 }}>
              <TextInput
                style={styles.input}
                placeholder={'Write Your offense here...!'}
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
        <View style={{ height: 300, width: 350, backgroundColor: '#29465B', marginTop: 100, borderRadius: 50 }}>
          <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
            <Image style={{ alignItems: 'center', right: 14, marginTop:-20 }} source={require("../assets/i12.png")} />
            <Text style={styles.text1}> Click here to upload offense</Text>
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            {image && <Image source={{ uri: image }} style={{ width: 250, height: 250, top: -220, left:30, borderRadius:50 }} />}
          </View>
        </View>
        <TouchableOpacity style={styles.button1} onPress={addField}>
                <Text style={styles.B1}>Report Offense</Text>
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
    marginLeft: 20,
    marginTop: -40
  },
  input: {
    borderRadius: 5,
    overflow:'hidden',
    backgroundColor: '#29465B',
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
    width: 300,
    top: 10,
    textAlign: 'center',
    color: 'white',
    fontSize:18
  },
  button1: {
    height: 50,
    borderRadius: 15,
    backgroundColor: '#DEC20B',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 50,
  },
  button2: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginLeft: 140
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
