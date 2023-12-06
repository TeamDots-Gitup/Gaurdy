// Import necessary modules
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../config'
import AdminDashboard from './AdminDashboard'

const AdminRegister = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const registerUser = async (email, password, firstName, confirmPassword) => {
    try {
      // Create user in Firebase Authentication
      await firebase.auth().createUserWithEmailAndPassword(email, password)

      // Send email verification
      const user = firebase.auth().currentUser;
      await user.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://gaurdy-try.firebaseapp.com',
      })

      // Save user details to Firestore
      await firebase.firestore().collection('users').doc(user.uid).set({
        firstName,
        email,
        confirmPassword,
      })

      // Display success message
      alert('Verification email sent')

      // Redirect to AdminDashboard if the user grants access
      NavigationPreloadManager.navigate('AdminDashboard');
      // Implement your access control logic here

    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Image style={[styles.icon]} source={require('../assets/gaurdy.png')} />
      <TextInput
        style={styles.textInput}
        placeholder="   Name"
        placeholderTextColor="white"
        onChangeText={(firstName) => setFirstName(firstName)}
        autoCorrect={false}
      />

      <TextInput
        style={styles.textInput}
        placeholder="   Email"
        placeholderTextColor="white"
        onChangeText={(email) => setEmail(email)}
        autoCorrect={false}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInput}
        placeholder="    Password"
        placeholderTextColor="white"
        onChangeText={(password) => setPassword(password)}
        autoCorrect={false}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.textInput}
        placeholder="    Confirm Password"
        placeholderTextColor="white"
        onChangeText={(password) => setConfirmPassword(confirmPassword)}
        autoCorrect={false}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={() => registerUser(email, password, firstName, confirmPassword)} style={styles.button}>
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}> Signup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AdminRegister

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#343512',
    paddingTop: 200,
    height: 1000,
  },
  icon: {
    top: -50,
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
    top: -50,
    borderColor: 'yellow',
    borderRadius: 20,
    color: 'white',
    placeholderColor: 'white',
    backgroundColor: '#29465B',
  },
  button: {
    height: 70,
    width: 350,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    top: -20,
  },
})
