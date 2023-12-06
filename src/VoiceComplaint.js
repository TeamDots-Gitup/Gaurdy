import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { firebase } from '../config';
import * as FileSystem from 'expo-file-system';

export default function VoiceComplaint() {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    Audio.requestPermissionsAsync(); // Move permission request to useEffect
  }, []);

  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
          allowsRecordingAndroid: true,
          playsInSilentModeAndroid: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        setRecording(recording);
      } else {
        setMessage("Please grant permission to access the microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    if (!recording) {
      return;
    }

    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    try {
      const { sound, status } = await Audio.Sound.createAsync(
        { uri: recording.getURI() },
        { shouldPlay: false }
      );

      setRecordings(prevRecordings => [
        ...prevRecordings,
        {
          sound: sound,
          duration: getDurationFormatted(status.durationMillis),
          file: recording.getURI(),
        },
      ]);
    } catch (error) {
      console.error('Failed to create sound', error);
    }
  };

  const deleteRecording = (index) => {
    let updatedRecordings = [...recordings];
    const deletedRecording = updatedRecordings.splice(index, 1)[0];

    // Unload the sound to free up resources
    deletedRecording.sound.unloadAsync();

    setRecordings(updatedRecordings);
  };

  const getDurationFormatted = (millis) => {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.floor((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  };

  const getRecordingLines = () => {
    return recordings.map((recordingLine, index) => (
      <View key={index} style={styles.row}>
        <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => recordingLine.sound.replayAsync()}
        >
          <Text style={styles.text4}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => deleteRecording(index)}
        >
          <Text style={styles.text4}>Delete</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  const saveRecordingToDevice = async () => {
    if (!recording) {
      return;
    }
  
    try {
      const { status } = await Audio.getPermissionsAsync();
      if (status !== 'granted') {
        const permissionResult = await Audio.requestPermissionsAsync();
        if (permissionResult.status !== 'granted') {
          setMessage("Please grant permission to save the recording to the device");
          return;
        }
      }
  
      await FileSystem.copyAsync({
        from: recording.uri,
        to: FileSystem.documentDirectory + 'recording.wav',
      });
  
      Alert.alert('Recording saved to device successfully!');
    } catch (error) {
      console.error('Failed to save recording to device', error);
    }
  };

  const uploadRecording = async () => {
    setUploading(true);
  
    try {
      const { uri } = await FileSystem.getInfoAsync(recording);
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
  
      const filename = recording.substring(recording.lastIndexOf('/') + 1);
  
      // Upload recording to Firebase Storage
      const storageRef = firebase.storage().ref().child(filename);
      await storageRef.put(blob);
  
      // Get the download URL
      const downloadURL = await storageRef.getDownloadURL();
  
      // Add recording details to Firestore
      const newDataRef = firebase.firestore().collection('newData');
      await newDataRef.add({
        textComplaint: 'Voice Complaint', // You can customize this
        videoURL: downloadURL,
      });
  
      setUploading(false);
      Alert.alert('Audio Uploaded Successfully!!');
      setRecording(null);
    } catch (error) {
      Alert.alert('Please Try Again');
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ left: 0, backgroundColor: '#29465B', width: 350, borderRadius: 50, height: 650, top: 0 }}>
        <Text style={styles.text}> Record a voice complaint</Text>
        <Text>{message}</Text>
        {!recording ? (
          <TouchableOpacity style={styles.button} onPress={startRecording}>
            <Text style={styles.text3}>Start Recording</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={stopRecording}>
            <Text style={styles.text3}>Stop Recording</Text>
          </TouchableOpacity>
        )}
        {getRecordingLines()}

        <TouchableOpacity style={styles.button} onPress={saveRecordingToDevice}>
          <Text style={styles.text3}>Save to Device</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.uploadButton} onPress={uploadRecording}>
          <Text style={styles.buttonText}>
            Upload your voice complaint
          </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071e3d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    margin: 16,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  button: {
    margin: 16,
    padding: 10,
    backgroundColor: '#DEC20B',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#071e3d',
    fontSize: 20,
    fontWeight: 'bold',
    width: 200,
    textAlign: 'center'
  },
  text: {
    color: '#DEC20B',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
    top: 20
  },
  text3: {
    color: '#071e3d',
    fontSize: 20,
    fontWeight: 'bold',
    width: 200,
    textAlign: 'center'
  },
  text4: {
    fontWeight: 'bold',
  },
  uploadButton: {
    borderRadius: 20,
    width: 300,
    height: 100,
    backgroundColor: '#DEC20B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    marginTop: 40,
    left: 30
  },
});
