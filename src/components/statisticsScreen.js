import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Platform,
  BackHandler,
  NativeModules,
} from 'react-native';
import MyButton from './myButton';
import { connect } from 'react-redux';

class StatisticsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Statistics',
  };

  constructor(props) {
    super(props);
  }

  _OnExitAppPressed = () => {
    BackHandler.exitApp();
    if (Platform.OS === 'ios') {
      NativeModules.ExitManager.exitApp();
    }
  };

  render() {
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
    const { count } = this.props;
    return (
      <>
        <StatusBar barStyle={barStyle} />
        <SafeAreaView style={styles.mainViewBg} forceInset={{ top: 'always' }}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                User has clicked {count} time(s) on select image button
              </Text>
            </View>
            <View style={styles.buttonView}>
              <MyButton
                title="Exit from the App"
                onPress={this._OnExitAppPressed}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainViewBg: {
    flex: 1,
    backgroundColor: '#003f5c',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  text: {
    color: 'white',
  },
  buttonView: {
    marginHorizontal: 40,
    justifyContent: 'center',
  },
});

const mapStateToProps = ({ addImageReducer, updateCountReducer }) => {
  return { images: addImageReducer.images, count: updateCountReducer.count };
};

export default connect(mapStateToProps)(StatisticsScreen);
