import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { useFetch } from "react-async";
// import { Loader } from '../src/Components/Loader';

export default function PsicoeducationScreen() {
    // var isLoading = false;

    const emotionsArray = [];
    const emotions = getEmotions();
    console.log(emotions);
    this.emotionsArray = emotions.map(item =>
        <View style={styles.section}>
            <Text style={styles.title}>item.title</Text>
            <Text style={styles.description}>item.description</Text>
        </View>);

    return (
        <View style={{ flex: 1 }}>
            {emotionsArray}
            {/* <Loader isLoading={isLoading} /> */}
        </View>
    );
}
const getEmotions = () => {
    // isLoading = true;
    const { data, error } = useFetch(`https://62bd8f85bac21839b6060f0c.mockapi.io/emotions`, {
        headers: { accept: "application/json" },
    })
    console.log(data);
    // isLoading = false;
    if (error) return error.message
    if (data) return data
    return null
};
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
    description: {
        paddingTop: 5,
        fontSize: 15
    }
});
