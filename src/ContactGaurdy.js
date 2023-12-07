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
  Image
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { firebase } from '../config';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking } from 'react-native';

const ReportOffense = () => {
  const navigation = useNavigation();
  const complaintsRef = firebase.firestore().collection('help&support');
  const [heading, setHeading] = useState('');
  const [textNotification, setTextNotification] = useState('');

  const contactViaEmail = () => {
    const email = 'gaurdy@gmail.com';
    Linking.openURL(`mailto:${email}`);
  };

  const contactViaWhatsApp = () => {
    const phoneNumber = '0750801121';
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
  };

  const visitUs = () => {
    Alert.alert(
      'Visit Us',
      'Address: Osul, Nawala, Colombo',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  };
  

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: '#071e3d', height: 1500,width:450 }}>
            <View style={styles.formcontainer}>
                <Text style={styles.heading}> Contact Gaurdy </Text>
                <Image source={require("../assets/QR.png")} style={{left:90, top:40}}></Image>
                <TouchableOpacity style={styles.button2} onPress={contactViaEmail}>
                <Text style={styles.text} > Click to Contact via email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}  onPress={contactViaWhatsApp}>
                <Text style={styles.text}> Contact via Whatsapp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}  onPress={visitUs}>
                <Text style={styles.text}> Visit Us</Text>
                </TouchableOpacity>
            </View>
        </View>
          000000
        
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#071e3d',
  },
  button2:{
    height: 50,
    borderRadius: 15,
    backgroundColor: '#DEC20B',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    top:80,
    marginTop:20,
    marginLeft: 80,
  },
  formcontainer:{
    backgroundColor:'#29465B',
    height:800,
    width:400,
    left:25,
    top:100,
    borderRadius:50,
  },
  heading:{
    color:'yellow',
    top:20,
    textAlign:'center',
    fontSize:35
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
  }
 
});

export default ReportOffense;
