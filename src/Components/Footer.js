import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Footer() {

    return (
        <View style={styles.main}>
            <Pressable style={styles.pressable}>
                <Icon name="radio-outline" size={25}></Icon>
                <Text style={styles.text}>Podcast</Text>
            </Pressable>
            <Pressable style={styles.pressable}>
                <Icon name="musical-notes-outline" size={25}></Icon>
                <Text style={styles.text}>Lo Fi</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
                <Icon name="bed-outline" size={25}></Icon>
                <Text style={styles.text}>Sleep</Text>
            </Pressable>

            <Pressable style={styles.pressable}>
                <Icon name="document-text-outline" size={25}></Icon>
                <Text style={styles.text}>Recursos</Text>
            </Pressable>
        </View>

    );
}


const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        borderTopColor: 'black',
        borderTopWidth: 1,
        paddingTop: 10,
        paddingBottom: 20
    },
    pressable: {
        flex: 1,
        alignSelf: "center",
        justifyContent: 'center',
        textAlign: 'center'
    },
    text: {
        fontSize: 10
    }

});