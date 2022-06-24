import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MainCalendar from './src/Components/MainCalendar';
import Footer from './src/Components/Footer';
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Icon name='menu' style={styles.menu} size={30} />
      <View stlye={styles.main}>
        <MainCalendar />
      </View>
      <Footer />
      <StatusBar style="auto" />
    </SafeAreaView>
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
