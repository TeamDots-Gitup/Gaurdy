import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Alert, Image, Button, ScrollView } from 'react-native';
import { firebase } from '../config';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { Video } from 'expo-av';

export default function App() {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    async function getMediaData() {
      // get reference to all media in firebase storage
 try {
        // Get a reference to the root directory in Firebase Storage
        const rootRef = firebase.storage().ref();

        // List all items in the root directory
        const items = await rootRef.listAll();

        // Filter out only video files
        const videoRefs = items.items.filter(item => item.name.endsWith('.mp4'));

        // Fetch data for each video
        const mediaInfo = await Promise.all(
          videoRefs.map(async (ref) => {
            const url = await ref.getDownloadURL();
            const metadata = await ref.getMetadata();
            return { url, metadata };
          })
        );

        setMediaData(mediaInfo);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    }

    getMediaData();
  }, []);
  async function downloadFile(url, fileName, isVideo) {
    try {
      // Request Permission
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Needed');
        return;
      }

      const fileUri = FileSystem.cacheDirectory + fileName;
      console.log('Starting download...!');
      const downloadResumable = FileSystem.createDownloadResumable(url, fileUri, {}, false);
      const { uri } = await downloadResumable.downloadAsync(null, { shouldCache: false });
      console.log('Download completed', uri);

      if (isVideo) {
        // generate thumbnail for video
        const { uri: thumbnailUri } = await VideoThumbnails.getThumbnailAsync(uri, { time: 1000 });
        console.log('Thumbnail created', thumbnailUri);
      }
      const asset = await MediaLibrary.createAssetAsync(uri);
      console.log('Asset Created: ', asset);

      // Show Alert with file location
      Alert.alert('Downloaded successfully', `File saved to: ${fileUri}`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>Get Video Complaints</Text>
      {mediaData.map((media, index) => {
        const { url, metadata } = media;
        const { name, contentType } = metadata;
        const isVideo = contentType.includes('video');
        return (
          <View key={index} style={styles.imageContainer}>
            {isVideo ? (
              <Video source={{ uri: url }} style={styles.image} resizeMode="contain" useNativeControls />
            ) : (
              <Image source={{ uri: url }} style={styles.image} resizeMode="contain" />
            )}

            <Button title={`Download`} onPress={() => downloadFile(url, name, isVideo)} />
          </View>
        );
      })}
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343512',
    alignItems: 'center',
    marginTop:0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'yellow',
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: 400,
    height: 600,
    marginBottom: 10,
  },
});
