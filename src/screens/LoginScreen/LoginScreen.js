/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
import { login } from '../../api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginScreen = ({navigation}) => {
  const [employeeID, setEmployeeID] = useState('');
  const [password, setPassword] = useState('');

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log(employeeID, password);

      login({id: employeeID, password})
        .then(res => {
          if (res) {
            storeData('@ams-token', res?.token);
            storeData('@ams-user', res?.user);
            navigation.navigate('Details');
            return;
          }
        })
        .catch(err => {
          console.log(err);
        });

      // axios
      //   .post(
      //     'http://192.168.0.114:5000/api/login',
      //     {id: employeeID, password},
      //     {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     },
      //   )
      //   .then(res => {
      //     console.log(res);
      //     return res?.data;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     return err;
      //   });
    } catch {
      //
    }
  };
  return (
    <ImageBackground
      source={require('../../assets/images/login.jpg')}
      style={styles.imageBackground}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Employee ID"
            value={employeeID}
            onChangeText={text => setEmployeeID(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Other components */}
            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={handleSubmit} />
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
