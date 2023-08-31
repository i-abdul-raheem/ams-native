/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ToastAndroid,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export const Scanner = () => {
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'You are Marked',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const onSuccess = async e => {
    try {
      showToastWithGravity();
    } catch (error) {
      console.log(error);
    }
  };

  const {width, height} = Dimensions.get('window');

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.cameraContainer, {width, height}]}>
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          cameraStyle={styles.cameraStyles}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ff0000',
  },
  cameraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraStyles: {
    height: '100%',
  },
});
