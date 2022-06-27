
import Footer from './src/Components/Footer';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import AccountScreen from './screens/Account';
import DrawerItems from './constants/DrawerItems';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerType="front"
          initialRouteName="Home"
          screenOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 10 },
          }}
        >
          {
            DrawerItems.map(drawer => <Drawer.Screen
              key={drawer.name}
              name={drawer.name}
              options={{
                drawerIcon: ({ focused }) =>
                  <Icon
                    name={drawer.iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                  />
                ,
                headerShown: true,
                // header: ({ scene }) => {
                //   const { options } = scene.descriptor;
                //   const title =
                //     options.headerTitle !== undefined
                //       ? options.headerTitle
                //       : options.title !== undefined
                //         ? options.title
                //         : scene.route.name;

                //   return (
                //     <Header screen={title} />
                //   );
                // }

              }}
              component={
                drawer.name === 'Account' ? AccountScreen
                  : HomeScreen
              }
            />
            )
          }
        </Drawer.Navigator>
      </NavigationContainer>
      <Footer />
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
