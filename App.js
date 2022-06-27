
import Footer from './src/Components/Footer';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from './screens/Home';
import AccountScreen from './screens/Account';
import ConfigurationScreen from './screens/Configuration';
import RemindersScreen from './screens/Reminders';
import StatisticsScreen from './screens/Statistics';


const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
       <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Account" component={AccountScreen} />
        <Drawer.Screen name="Statistics" component={StatisticsScreen} />
        <Drawer.Screen name="Reminders" component={RemindersScreen} />
        <Drawer.Screen name="Configuration" component={ConfigurationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
      <Footer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  menu: {
    marginTop: 15,
    marginLeft: 15
  },
  main: {
    flexDirection: "column",
    padding: 20
  },
  today: {
    width: '70%',
    height: 100,
    backgroundColor: '#B3FD98',
    marginTop: 25,
    alignSelf: "center",
    justifyContent: 'center'
  },
  todayText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  navbar: {
    flexDirection: "row"
  }
});
