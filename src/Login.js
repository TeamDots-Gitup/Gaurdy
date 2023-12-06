import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
//import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
//import Dashboard from './Dashboard';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const loadRememberedCredentials = async () => {
    const usernameSnapshot = await firebase.database().ref('credentials/username').once('value');
    const passwordSnapshot = await firebase.database().ref('credentials/password').once('value');

    const username = usernameSnapshot.val();
    const savedPassword = passwordSnapshot.val();

    if (username && savedPassword) {
      setEmail(username);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  };

  const saveCredentials = async () => {
    if (rememberMe) {
      await firebase.database().ref('credentials/username').set(email);
      await firebase.database().ref('credentials/password').set(password);
    }
  };

  const loginUser = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      saveCredentials();
      // User authentication successful, proceed with the app logic
    } catch (error) {
     alert('User Authentication Fail..!');
      // Provide user feedback on authentication failure
    }
  };

  // Forget the password
  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Password reset email sent');
      })
      .catch((error) => {
        console.error('Error occurred:', error);
      });
  };

  /*
  // Handle user state changes
    function onAuthStateChanged (user) {
      setUser(user);
      if (initializing) setInitializing (false);
    }
    useEffect (() => {
      GoogleSignin.configure({
        webClientId:'91691742185-bo42jdh61qq7klgbpl0l9tcnace3cv09.apps.googleusercontent.com',
      });

      const subscriber = firebase.auth().onAuthStateChanged (onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
      }, []);

   const onGoogleButtonPress = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = firebase.auth.GoogleAuthProvider.credential(idToken);
      const userSignIn = await firebase.auth().signInWithCredential(googleCredential);
      console.log('User:', userSignIn);
      
      if (userSignIn && userSignIn.additionalUserInfo.isNewUser) {
        // If the user is new, navigate to the dashboard
        navigation.navigate('Dashboard');
      } else if (userSignIn && !userSignIn.additionalUserInfo.isNewUser) {
        // If it's an existing user, navigate to another screen or handle accordingly
        // navigation.navigate('AnotherScreen');
        // Or provide feedback to the user
        console.log('Existing User');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  if (initializing) return null;

*/
  return (
    
    <View style={styles.container}>
     <TouchableOpacity onPress={() => navigation.navigate("AdminLogin")}>
        <Image
          style={styles.abcd}
          resizeMode="cover"
          source={require('../assets/abcd.png')}
        />
      </TouchableOpacity>
      
      <Image
        style={styles.gaurdy}
        resizeMode="cover"
        source={require('../assets/gaurdy.png')}
      />

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          value={password}
          placeholderTextColor="white"
          
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eye}>
            <Ionicons name={showPassword ? 'ios-eye-off' : 'ios-eye'} size={24} color="grey" />
        </TouchableOpacity>
        
        <View style={styles.container2}>
        <TouchableOpacity onPress={forgetPassword} style={styles.forgetPasswordLink}>
          <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.rememberMeContainer}>
          <CheckBox
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            title="Remember Me"
            containerStyle={styles.checkboxContainer}
          />
        </View>
        </View>
        
        <TouchableOpacity onPress={loginUser} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.dividerText}>--------------------------    or continue with   ------------------------</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.signupLink}>
          <Text style={styles.signupText}>New User? Signup</Text>
        </TouchableOpacity>

    </View>
      <TouchableOpacity style={styles.icon}onPress={() => navigation.navigate("AdminLogin")} >
          <Image style={styles.icon} resizeMode="cover" source={require('../assets/abcd.png')} />
      </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={{backgroundColor:'#3E4659',width:100, height:100,borderRadius:20, top:600, right:140}}>
                  <Image  style={styles.fb}source={require("../assets/facebook.png")}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={{backgroundColor:'#3E4659',width:100, height:100,borderRadius:20, top:500, right:0}}>
                  <Image  style={styles.x}source={require("../assets/google.png")}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={{backgroundColor:'#3E4659',width:100, height:100,borderRadius:20, top:400, right:-140}}>
                  <Image  style={styles.x}source={require("../assets/twitter.png")}/>
              </View>
            </TouchableOpacity>
            
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071e3d',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container2:{
    marginTop:50
  },

  eye:{
    marginTop:-50,
    right:-300
  },

  
  fb:{
    height:50,
    width:50,
    left:25,
    top:25
  },
  
  x:{
    height:50,
    width:50,
    left:25,
    top:25
  },
  go:{
    height:50,
    width:50,
    left:25,
    top:25
  },
  formContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
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
  icon: {
    marginTop:-800,
    left:154,
    height:35,
    width:38
  },
  button: {
    height: 50,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginVertical: 10,
    marginTop:0
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
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
  dividerText: {
    color: 'yellow',
    textAlign: 'center',
    marginTop:30,
    fontSize: 16,
  },

  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    right:20,
    marginTop:-15,
  },
  forgetPasswordLink: {
    alignSelf: 'flex-end',
    right:0,
    
  },
  forgetPasswordText: {
    fontSize: 16,
    color: 'yellow',
    
  },
 
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginTop:-19,
    color:'yellow'
  },
  gaurdy: {
    marginTop:-400,
    width: 200,
    height: 200,
  },
  abcd: {
    marginTop:-440,
    width: 50,
    height: 50,
    left:150
  },
  socialMediaAuth:{
    marginTop:700,
    right:120 }
});

export default Login;
