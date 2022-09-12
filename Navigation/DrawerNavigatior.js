import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import screen1 from '../Screens/Screen1.js';
import screen2 from '../Screens/Screen2.js';
import screen3 from '../Screens/screen3.js';
import DrawerContent from './DrawerContent';
import { colors } from '../Component/colors.js';
const Drawer = createDrawerNavigator();

const DrawerNavigatior = ({navigation}) =>{
  return (
    <>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}screenOptions={{ headerStyle: { backgroundColor:colors.colors.headColor }, headerTintColor: 'white', }}>
        <Drawer.Screen name="screen1" component={screen1}/>
        <Drawer.Screen name="screen2" component={screen2} />
        <Drawer.Screen name="screen3" component={screen3} />
      </Drawer.Navigator>
    </>
  );
}
export default DrawerNavigatior;