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
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as common from '../constants/';

class StatisticsScreen extends Component {
  static navigationOptions = {
    drawerLabel: common.STATISTICS,
    drawerIcon: () => (
      <Ionicons
        name="ios-analytics"
        size={30}
        style={common.comStyles.drawerIcon}
        color="#000"
      />
    ),
  };

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.navigation.setParams({ title: common.STATISTICS });
  };

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
        <SafeAreaView style={styles.mainViewBg}>
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#003f5c',
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
