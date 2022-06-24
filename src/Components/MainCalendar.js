import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function MainCalendar() {
    const [day, setDay] = useState(0);
    let today = new Date();
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    if (day) {
        today = day;
    }
    return (
        <View style={styles.main}>
            <Pressable onPress={() => {
                var result = new Date(today);
                result.setDate(result.getDate() - 1);
                setDay(result);
            }}>
                <Icon name="chevron-back-outline" style={styles.arrow} size={50} />
            </Pressable>

            <View style={styles.today} >
                <Text style={styles.todayText}>{today.getDate()} de {monthNames[today.getMonth()]}</Text>
            </View>

            <Pressable onPress={() => {
                var result = new Date(today);
                result.setDate(result.getDate() + 1);
                setDay(result);
            }}>
                <Icon name="chevron-forward-outline" style={styles.arrow} size={50} />
            </Pressable>
        </View>

    );
}


const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        marginTop: 25,
        alignItems: "center",
    },
    today: {
        height: 100,
        backgroundColor: '#B3FD98',
        alignSelf: "center",
        justifyContent: 'center',
        flex: 5
    },
    todayText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    arrow: {
        flex: 1,
        alignSelf: "center",
        justifyContent: 'center',
        textAlign: 'center'
    }
});