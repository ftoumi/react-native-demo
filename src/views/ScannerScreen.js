import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { Camera } from 'expo-camera';

export default function ScannerScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
 
  const [barcode, setBarcode] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const checkBarcode = ({type, data}) => {
    setBarcode(data)
    Alert.alert(data)
    //navigation.navigate('Details', { barcode })
  }

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        type={Camera.Constants.Type.back}
        onBarCodeScanned={ barcode ? '' : checkBarcode}
      >
        <ImageBackground source={ require('../../assets/filtrescanner.png') } style={styles.buttonContainer}>

         

        </ImageBackground>

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