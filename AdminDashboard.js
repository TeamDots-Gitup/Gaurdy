import {  View, Text, StyleSheet, TouchableOpacity,Image, ScrollView, FlatList, Linking } from 'react-native'
import React, {useState, useEffect} from 'react'
import {firebase} from '../config'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import Slider from '../components/Slider'


const AdminDashboard = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  // change the password
  const changePassword = () => {
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(() => {
      alert("Password reset email sent")
    }).catch((error) => {
      alert(error)
    })
    }

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      firebase
        .firestore()
        .collection('users')
        .doc(currentUser.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            setName(snapshot.data());
          } else {
            console.log('User does not exist');
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    } else {
      console.log('User Not Authenticated');
    }
  }, []);
  
  return (
    <View style={styles.containers}>
      <ScrollView>
     <SafeAreaView style = {styles.container}>
       <View style={styles.scrollView}>
        <Text style={{fontSize:20,color:'white', left:30, marginTop:30}}>
            Hey !! Welcome back officer{name.firstName}
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Example")}>
          <Image  style={{left:350, width:30, height:30,marginTop:-20}}source={require("../assets/i11.png")}>
          </Image>   
      </TouchableOpacity>     
      <View>
        <Text style={{top:80, textAlign:'center', color:'yellow', fontSize:40, right:35}}>
          Manage Complaints
        </Text>
      </View>

    
<View style={{top:130, left:45}}>
    <TouchableOpacity onPress={() => navigation.navigate("GetText")}>
      <View style={{backgroundColor:'#3E4659',width:340, height:100,borderRadius:20, top:-20}}>
                <Image  style={styles.I1}source={require("../assets/i1.png")}>
                </Image>
                <Text style={styles.C1}  >
                  Text Complaints
                </Text>
      </View>
    </TouchableOpacity>
      
    <TouchableOpacity onPress={() => navigation.navigate("GetAudio")}>
      <View style={{backgroundColor:'#3E4659',width:340, height:100, borderRadius:20,top:5}}>
                <Image  style={styles.I1}source={require("../assets/i4.png")}>
                </Image>        
                <Text style={styles.C1}>
                  Voice Complaints
                </Text>
      </View>
    </TouchableOpacity>
       
    <TouchableOpacity onPress={() => navigation.navigate("GetVideo")}>
      <View style={{backgroundColor:'#3E4659',width:340, height:100,borderRadius:20, top:30}}>
                <Image  style={styles.I1}source={require("../assets/i5.png")}>
                </Image>
                <Text style={styles.C1}>
                  Video Complaints
                </Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("GetOffense")}>
      <View style={{backgroundColor:'#3E4659',width:340, height:100,borderRadius:20, top:55}}>
                <Image  style={styles.I1}source={require("../assets/i5.png")}>
                </Image>
                <Text style={styles.C1}>
                  Offense
                </Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("SendNotfication")}>
      <View style={{backgroundColor:'#3E4659',width:340, height:100,borderRadius:20, top:80}}>
                <Image  style={styles.I1}source={require("../assets/i5.png")}>
                </Image>
                <Text style={styles.C1}>
                  Alert Notfications
                </Text>
    </View>
    </TouchableOpacity>
    <View>
    
    </View>
    <View style={{top:400, right:40}}>
      <TouchableOpacity
          onPress={() => firebase.auth().signOut().then(() => navigation.navigate('AdminLogin'))}
          style={styles.button}
      >
          <Text style={{fontSize:13,fontWeight:'bold'}}>
            Sign out
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => {
           changePassword()}}
          style={styles.button2}
      >
          <Text style={{fontSize:13,fontWeight:'bold'}}>
            Change Password
          </Text>
      </TouchableOpacity>
      
    </View>  
  </View>
  </View>
 </SafeAreaView>
 </ScrollView>
</View>
  )
          }


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#343512',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1000
        },
        containers:{
          marginTop:0,
          color:'#343512',
        },
        Box:{
      
        },
        C1:{
          color:'white',
          fontSize:20,
          top:40,
          left:100,
          textAlign:'center',
          width:200,
          fontWeight:'bold'
        },
        
        I1:{
          width:70,
          height:70,
          position:'absolute',
          left:35,
          top:10
        },
      
        I2:{
          width:100,
          height:100,
          position:'absolute',
          left:200,
          top:10
        },
      
        container:{
          backgroundColor:'#343512',
          width:500,
          height:1100,
          top:0
      },
        
        button:{
          marginTop:-300,
          height:50,
          width:"80%",
          backgroundColor:'#DEC20B',
          alignItems:'center',
          justifyContent: 'center',
          borderRadius:10,
          top:70,
          left:10,
        },
        button2:{
          marginTop:100,
          height:50,
          width:"80%",
          backgroundColor:'#DEC20B',
          alignItems:'center',
          justifyContent: 'center',
          borderRadius:10,
          top:-20,
          left:10
        },
        gaurdy:{
          width:50,
          height:50,
          left:50,
          top:10
        },
        gaurdy1:{
          width:50,
          height:50,
          left:250,
          top:-40
        },
      
})
export default AdminDashboard;