import * as React from 'react';
import { View, Text } from "react-native";

export default function ConfigurationScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: '700' }}>Configuration Screen</Text>
        </View>
    );
}