import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Screens/Dashboard.js';
import Medium from '../Screens/Medium.js';
import Section from '../Screens/Section';
import ManageSubject from '../Screens/ManageSubject';
import StudentAdmission from '../Screens/StudentAdmission';
import ManageClass from '../Screens/ManageClass';
import DrawerContent from './DrawerContent';
import { colors } from '../Component/colors.js';
const Drawer = createDrawerNavigator();

const DrawerNavigatior = ({navigation}) =>{
  return (
    <>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}screenOptions={{ headerStyle: { backgroundColor:colors.colors.headColor }, headerTintColor: 'white', }}>

        <Drawer.Screen name="Dashboard" component={Dashboard}/>
        <Drawer.Screen name="Medium" component={Medium} options={{ title: 'Manage Medium' }}/>
        <Drawer.Screen name="Section" component={Section} options={{ title: 'Manage Section' }}/>
        <Drawer.Screen name="ManageSubject" component={ManageSubject} options={{ title: 'Manage Subject' }}/>
        <Drawer.Screen name="ManageClass" component={ManageClass} options={{ title: 'Manage Class' }}/>
        <Drawer.Screen name="StudentAdmission" component={StudentAdmission} options={{ title: 'Student Admission' }}/>
      </Drawer.Navigator>
    </>
  );
}
export default DrawerNavigatior;