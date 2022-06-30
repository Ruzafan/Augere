
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/Home';
import AccountScreen from './screens/Account';
import ConfigurationScreen from './screens/Configuration';
import PsicoeducationScreen from './screens/Psicoeducation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="person" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Psicoeducation"
            component={PsicoeducationScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="book" color={color} size={size} />
              ),
            }} />
          <Tab.Screen
            name="Settings"
            component={ConfigurationScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="cog" color={color} size={size} />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
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
