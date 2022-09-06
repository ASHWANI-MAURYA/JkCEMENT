import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, } from 'react-native'
import form1 from '../Screens/form(1)';
import Admin from '../Screens/admin';
import AdminPanal from '../Screens/adminPanal';
const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name='Admin' component={Admin}/>
       <Stack.Screen name='form1' component={form1}/>
        <Stack.Screen name='AdminPanal' component={AdminPanal}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default navigation