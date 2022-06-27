import * as React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import MainCalendar from '../src/Components/MainCalendar';

export default function HomeScreen() {
    return (
        <View>
            <View stlye={styles.main}>
                <MainCalendar />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        marginTop: 15,
        marginLeft: 15
    },
    main: {
        flexDirection: "column",
        padding: 20
    }
});
