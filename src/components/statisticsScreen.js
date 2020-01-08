import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Platform,
  BackHandler,
  Alert,
} from 'react-native';
import MyButton from './myButton';
import {connect} from 'react-redux';

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
      Alert.alert(
        'Warning',
        'You must close app yourself.',
        [{text: 'OK'}],
        {},
      );
    }
  };

  render() {
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
    const {images} = this.props;
    return (
      <>
        <StatusBar barStyle={barStyle} />
        <SafeAreaView style={styles.mainViewBg} forceInset={{top: 'always'}}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                User has clicked {images.length} time(s) on select image button
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

const mapStateToProps = state => {
  return {images: state.addImageReducer.images};
};

export default connect(mapStateToProps)(StatisticsScreen);
