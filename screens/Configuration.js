import * as React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import RemindersScreen from './Reminders';
import StatisticsScreen from './Statistics';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

export default function ConfigurationScreen() {
    const Drawer = createDrawerNavigator();

    return (
        <View>
            <Drawer.Navigator
                useLegacyImplementation
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Statistics" component={StatisticsScreen} />
                <Drawer.Screen name="Reminders" component={RemindersScreen} />
            </Drawer.Navigator>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>Configuration Screen</Text>
            </View>
        </View>

    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}