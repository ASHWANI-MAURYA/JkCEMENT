import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native';
import { Caption, Drawer, Title, useTheme, } from 'react-native-paper';
import { colors } from '../Component/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
// import useAuth from '../useAuth';
const DrawerContent = ({navigation}) => {
  // const { user, logOut } = useAuth.useAuth();
  return (
    <DrawerContentScrollView >
      <View style={styles.userInfoSection}>
        <TouchableOpacity
        >
          <MaterialCommunityIcons
            name={"account-circle-outline"}
            size={50}
            // color='white'
          />
        </TouchableOpacity>
        {/* <Title style={[styles.title]}><Text>Ankush</Text></Title> */}
        <Caption style={[styles.caption]}><Text>useremail@gmail.com</Text></Caption>
      </View>
      <Drawer.Section style={styles.drawerSection}>
        <DrawerItem key="Dashboard"
          icon={props => <Icon name={'home'} size={25} />}
          label="Dashboard"
          onPress={() => navigation.navigate('screen1')}
        />
        <DrawerItem key="Academics"
          icon={props => <Icon name={'institution'} size={25} />}
          label="Academics"
          onPress={() => navigation.navigate('screen2')}
        />
        <DrawerItem key="Student"
          icon={props => <Icon name={'graduation-cap'} size={25} />}
          label="Student"
          onPress={() => navigation.navigate('screen1')}
        />
        <DrawerItem key="Teacher"
          icon={props => <Icon name={'user'} size={25} />}
          label="Teacher "
          // onPress={logOut}
        />
        <DrawerItem key="Parents"
          icon={props => <Icon name={'users'} size={25} />}
          label="Parents"
          // onPress={logOut}
        />
        <DrawerItem key="TimeTable"
          icon={props => <Icon name={'calendar'} size={25} />}
          label="TimeTable"
          // onPress={logOut}
        />
        <DrawerItem key="holiday"
          icon={props => <Icon5 name={'calendar'} size={25} />}
          label="holiday List"
          // onPress={logOut}
        />
        <DrawerItem key="Announcement"
          icon={props => <Icon2 name={'announcement'} size={25} />}
          label="Announcement "
          // onPress={logOut}
        />
        <DrawerItem key="Exam"
          icon={props => <Icon name={'copy'} size={25} />}
          label="Exam"
          // onPress={logOut}
        />
        <DrawerItem key="ession"
          icon={props => <Icon name={'calendar-o'} size={25} />}
          label="ession year"
          // onPress={logOut}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    marginTop:20,
    
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 18,
    lineHeight: 34,
    // color:'white',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;