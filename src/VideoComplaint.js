//videoComplaint
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import React,{useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import {firebase} from '../config';
import * as FileSystem from 'expo-file-system';


const VideoComplaint = () => {
      const [image,setImage] = useState(null)
      const [uploading, setUploading] = useState(false)

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
      

      // upload media files 

      const uploadImage = async () => {
        setUploading(true);

    try{
      const {uri} = await FileSystem.getInfoAsync(image);
      const blob = await new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response);
        };
        xhr.onerror = (e) => {
          reject(new TypeError('Netword Request Failed..!'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
      });

      const filename = image.substring(image.lastIndexOf('/') + 1);
      const ref = firebase.storage().ref().child(filename);

      await ref.put(blob);
      setUploading(false);
      Alert.alert('Video Uploaded Successfully!!');
      setImage(null);
    } catch (error){
      Alert.alert('Please Try Again');
      setUploading(false);
    }
    };



  return (
    <SafeAreaView style={styles.container}>
      <View style={{height:800, width:350, backgroundColor:'#29465B',marginTop:100, borderRadius:50}}>
        <Text style={styles.text}> Record a video complaint</Text>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <Image style={{alignItems:'center', right:14}}source={require("../assets/i12.png")}>
        </Image>
        <Text style={styles.text1}> Click here to upload your video</Text>
      </TouchableOpacity>
        <View style={styles.imageContainer}>
            {image && <Image source={{uri: image}} style={{width:300, height:300,top:-150}}/>}
        </View>
        <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
              <Text style={styles.buttonText}>
                Report Video complaint
              </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default VideoComplaint

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#071e3d',
  },
  selectButton:{
    borderRadius:5,
    width:70,
    height:70,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:50,
    marginTop:100,
    left:150
  
  },
  uploadButton:{
    borderRadius:20,
    width:300,
    height:100,
    backgroundColor:'#DEC20B',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:0,
    marginTop:40,
    left:30,
  },
  buttonText:{
    color: '#071e3d',
    fontSize:20,
    fontWeight:'bold',
    width:100,
    textAlign:'center'
  },
  imageContainer:{
    marginTop:-10, 
    marginBottom:-10,
    marginLeft:25
  },
  text:{
    color:'#DEC20B',
    textAlign:'center',
    fontSize:25,
    fontWeight:"bold",
    top:20
  },
  text1:{
    color:'#DEC20B',
    textAlign:'center',
    fontSize:20,
    fontWeight:"bold",
    top:20,
    width:300
  }
})