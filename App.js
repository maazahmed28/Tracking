import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import HomeScreen from './src/Screens/HomeScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions = {{
        headerStyle: {backgroundColor : '#009388'},
        headerTintColor : '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerTitleAlign:'center'

         }}
      >
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;