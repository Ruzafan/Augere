import * as React from 'react';
import { StyleSheet, View, Pressable, Text, Linking } from 'react-native';
import MainCalendar from '../src/Components/MainCalendar';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
    return (
        <View style={styles.fullHeight}>
            <View stlye={styles.main}>
                <MainCalendar />
            </View>
            <View style={styles.box}>
                <Pressable style={styles.pressable} >
                    <Icon name="radio-outline" size={25}></Icon>
                    <Text style={styles.text}>Podcast</Text>
                </Pressable>
                <Pressable style={styles.pressable} onPress={() => Linking.openURL('https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn')}>
                    <Icon name="musical-notes-outline" size={25}></Icon>
                    <Text style={styles.text}>Lo Fi</Text>
                </Pressable>
            </View>
            <View style={styles.box}>
                <Pressable style={styles.pressable}>
                    <Icon name="bed-outline" size={25}></Icon>
                    <Text style={styles.text}>Sleep</Text>
                </Pressable>

                <Pressable style={styles.pressable}>
                    <Icon name="document-text-outline" size={25}></Icon>
                    <Text style={styles.text}>Recursos</Text>
                </Pressable>
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
    },
    fullHeight: {
        height: '100%'
    },
    pressable: {
        flex: 1,
        alignSelf: "center",
        justifyContent: 'center',
        textAlign: 'center'
    },
    text: {
        fontSize: 10
    },
    box: {
        flex: 1,
        flexDirection: "row",
    }
});
