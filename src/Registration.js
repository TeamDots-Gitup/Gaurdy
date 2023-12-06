import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Alert } from 'react-native';
import { firebase } from '../config';
import { useNavigation } from "@react-navigation/native";

const Registration = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const registerUser = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      // Add user details to Firestore
      await firebase.firestore().collection('users').doc(email).set({
        firstName,
        email,
        password, // Note: Storing the password in the database is not recommended. This is just for demonstration purposes.
      });

      // Clear input fields
      setFirstName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      // Show success alert
      Alert.alert(
        'Success',
        'Your information has been updated. Login and continue.',
        [{ text: 'OK' }]
      );

      // Navigate to login page
      navigation.navigate('Dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <Image style={styles.icon} source={require("../assets/gaurdy.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="   Name"
          placeholderTextColor='white'
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="   Email"
          placeholderTextColor='white'
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="    Password"
          placeholderTextColor='white'
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textInput}
          placeholder="    Confirm Password"
          placeholderTextColor='white'
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        onPress={registerUser}
        style={styles.button}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}> Signup</Text>
      </TouchableOpacity>

      
     
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 350,
    borderRadius: 5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    top: -140,
    marginLeft: 0,
  },
  button2: {
    height: 50,
    width: 350,
    borderRadius: 5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    top: -130,
    marginLeft: 0,
  },
  
  container: {
    alignItems: 'center',
    marginTop: -10,
    backgroundColor: '#071e3d',
    paddingTop: 200,
    height:1000
  },
  icon: {
    top: -150,
    left: 90,
    height: 200,
    width: 200,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 350,
    fontSize: 15,
    borderWidth: 1,
    marginBottom: 30,
    textAlign: 'left',
    top: -130,
    borderColor: 'yellow',
    borderRadius: 20,
    color: 'white',
    placeholderColor: 'white',
    backgroundColor: "#29465B"
  },
});

export default Registration;