import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  let today = new Date();
  return (
    <View style={styles.container}>
      <Icon name='menu' style={styles.menu} size={30} />
      <View stlye={styles.main}>
        <View style={styles.today} >
          <Text style={styles.todayText}>{today.getDay()}</Text>
        </View>
      </View>
      <View style={styles.navbar}>
      <Button
        title="Podcast"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
      <StatusBar style="auto" />
    </View>
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
