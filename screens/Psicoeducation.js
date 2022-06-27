import * as React from 'react';
import {StyleSheet, View, Text } from "react-native";

export default function PsicoeducationScreen() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.section}>
                <Text style={styles.title}>Ansiedad</Text>
                <Text style={styles.description}>La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '700' 
    },
    description:{
        paddingTop: 5,
        fontSize: 15
    }
});
  