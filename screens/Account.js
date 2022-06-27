import * as React from 'react';
import { View, Text } from "react-native";
export default function AccountScreen() {
    return (
        <View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>Account Screen</Text>
            </View>
        </View>

    );
}