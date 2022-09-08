import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, } from 'react-native'
import form1 from '../Screens/Form1';
import LoginPage from '../Screens/LoginPage';
import AdminPanal from '../Screens/AdminPanal';
const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='form1' component={form1} />
        <Stack.Screen name='AdminPanal' component={AdminPanal} />
        <Stack.Screen name='LoginPage' component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default navigation