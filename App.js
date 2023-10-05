import React from 'react';
import {SafeAreaView} from 'react-native';
import {EmployeeDetailScreen, LoginScreen, Scanner} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Details" component={EmployeeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
