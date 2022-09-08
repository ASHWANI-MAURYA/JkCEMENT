import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { View, } from 'react-native'
import form1 from './Screens/Form1';
import LoginPage from './Screens/LoginPage';
import AdminPanal from './Screens/AdminPanal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Title } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white',  }}>
        <Stack.Screen name='LoginPage' component={LoginPage} options={{title:'Login'}}/>
        <Stack.Screen name='form1' component={form1} options={{title:'Form 1'}}/>
        <Stack.Screen name='AdminPanal' component={AdminPanal} options={{title:'Admin Panal'}}/>
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;