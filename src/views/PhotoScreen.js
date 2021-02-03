import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { Ionicons } from '@expo/vector-icons'
import * as theme from '../config/theme'

export default function PhotoScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null)
 
  let camera

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const mediaLibraryResponse = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    const options = {quality: .5, base64: true, exif: false}
    const data = await camera.takePictureAsync(options)

    const asset = await MediaLibrary.createAssetAsync(data.uri)
    const album = await MediaLibrary.getAlbumAsync("Demo")
    if(!album) {
      await MediaLibrary.createAlbumAsync("Demo", asset, false )
    } else {
      await MediaLibrary.addAssetsToAlbumAsync(asset, album, false)
    }

    console.log(asset)
  }

  return (
    <View style={styles.container}>
      <Camera 
        ref={ref => (camera = ref)}
        style={styles.camera} 
        type={Camera.Constants.Type.back}

      >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
         

          <TouchableOpacity
            onPress={takePicture} 
            style={{ borderWidth: 4, borderColor: 'white', width: 80, height: 80, borderRadius: 50, alignItems: 'center', justifyContent:'center', marginBottom: 60 }}>
            <Ionicons name="camera" size={42} color="white" />
          </TouchableOpacity>

        </View>

      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});