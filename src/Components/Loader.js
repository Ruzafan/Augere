import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Image,
  ActivityIndicator
} from 'react-native';
const Loader =  (props) => {
    this.state = {
      isLoading: this.props.isLoading
    }
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={this.state.isLoading}
      style={{ zIndex: 1100 }}
      onRequestClose={() => { }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={this.state.loading} color="blue" />

          {/* If you want to image set source here */}
          {/* <Image
            source={require('../assets/images/loader.gif')}
            style={{ height: 80, width: 80 }}
            resizeMode="contain"
            resizeMethod="resize"
          /> */}
        </View>
      </View>
    </Modal>
  )
}
function getDerivedStateFromProps(nextProps) {
    return {
        isLoading: nextProps.isLoading
    };
    }
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
export default Loader