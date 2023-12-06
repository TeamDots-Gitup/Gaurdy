import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const AdminLogin = () => {
  const navigation = useNavigation();
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


const loginAdmin = async ()=> {
  try {
    await firebase.auth().signInWithEmailAndPassword(adminEmail, adminPassword);
    navigation.navigate('AdminDashboard');
  } catch (error) {
    alert('Check Your Email and Password');
  }
};

const forgetPassword = () => {
  firebase
    .auth()
    .sendPasswordResetEmail(adminEmail)
    .then(() => {
      alert('Password reset email sent');
    })
    .catch((error) => {
      alert('Please Try Again');
    });
};

return (
  <View style={styles.container1}>

     <Image
        style={styles.gaurdy}
        resizeMode="cover"
        source={require('../assets/gaurdy.png')}
      />
     <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setAdminEmail(text)}
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setAdminPassword(text)}
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          value={adminPassword}
          placeholderTextColor="white"
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eye}>
            <Ionicons name={showPassword ? 'ios-eye-off' : 'ios-eye'} size={24} color="grey" />
        </TouchableOpacity>
       
        <TouchableOpacity onPress={forgetPassword} style={styles.forgetPasswordLink}>
          <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={loginAdmin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AdminRegister')} style={styles.signupLink}>
          <Text style={styles.signupText}>New User? Signup</Text>
        </TouchableOpacity>

  </View>
);
};

const styles = StyleSheet.create({
  forgetPasswordText: {
    fontSize: 16,
    color: 'yellow',
    top:30,
    left:110
  },
  gaurdy:{
    height: 250,
    width:250,
  },
  container1:{
    flex: 1,
    backgroundColor: '#343512',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupLink: {
    alignItems: 'center',
    marginTop:150
  },
  signupText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginTop:0
  },
  input: {
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    width:350,
    borderColor: 'yellow',
    borderRadius: 6,
    backgroundColor: '#29465B',
    color: 'white',
    paddingLeft: 10,
    marginVertical: 10,
  },
  button: {
    height: 50,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginVertical: 10,
    marginTop:50,
    width: 350
  },
  eye:{
    marginTop:-50,
    right:-300
  },

});

export default AdminLogin;
