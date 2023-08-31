/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from 'react-native';

export const LoginScren = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/login.jpg')}
      style={styles.imageBackground}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Login</Text>
          <TextInput style={styles.input} placeholder="Employee ID" />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Other components */}
            <View style={styles.buttonContainer}>
              <Button
                title="Login"
                onPress={() => navigation.navigate('Details')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 26,
  },
  buttonContainer: {
    width: Dimensions.get('window').width * 0.53,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
});
