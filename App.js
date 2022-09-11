import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { View, } from 'react-native'
import form1 from './Screens/EducationCategory';
import LoginPage from './Screens/LoginPage';
import AdminPanal from './Screens/AdminPanal';
import PersonalInformation from './Screens/PersonalInformation';
import AddressDetails from './Screens/AddressDetails';
import OperationDetails from './Screens/OperationDetails';
import DocumentsDetails from './Screens/DocumentsDetails';
import PackageSelection from './Screens/PackageSelection';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Title } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', }}>
        <Stack.Screen name='LoginPage' component={LoginPage} options={{ title: 'Login' }} />
        <Stack.Screen name='EducationRegistration' component={form1} options={{ title: 'Education Registration' }} />
        <Stack.Screen name='AdminPanal' component={AdminPanal} options={{ title: 'Admin Panal' }} />
        <Stack.Screen name='PersonalInformation' component={PersonalInformation} options={{ title: 'Personal Information' }} />
        <Stack.Screen name='AddressDetails' component={AddressDetails} options={{ title: 'Address Details' }} />
        <Stack.Screen name='OperationDetails' component={OperationDetails} options={{ title: 'Operation Details' }} />
        <Stack.Screen name='DocumentsDetails' component={DocumentsDetails} options={{ title: 'Documents Details' }} />
      <Stack.Screen name='PackageSelection' component={PackageSelection} options={{ title: 'Package Selection' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;