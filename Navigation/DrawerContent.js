import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native';
import { Caption, Drawer, Title, useTheme, } from 'react-native-paper';
import { colors } from '../Component/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
// import useAuth from '../auth/useAuth';
const DrawerContent = (props) => {
  // const { user, logOut } = useAuth.useAuth();
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor:colors.colors.headColor}}>
      <View style={styles.userInfoSection}>
        <TouchableOpacity
          // onPress={() => {
          //   props.navigation.toggleDrawer();
          // }}
        >
          <MaterialCommunityIcons
            name={"account-circle-outline"}
            size={50}
          />
        </TouchableOpacity>
        {/* <Title style={[styles.title]}><Text>Ankush</Text></Title> */}
        <Caption style={[styles.caption]}><Text>abc@gmail.com</Text></Caption>
      </View>
      <Drawer.Section style={styles.drawerSection}>
       
        {/* <DrawerItem key="logout"
          icon={props => <Icon name={'power-off'} size={20} />}
          label="Logout"
          onPress={logOut}
        /> */}

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
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
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