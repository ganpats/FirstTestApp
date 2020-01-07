import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Platform} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import MyButton from './myButton';

export default class SelectImageScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Select Image',
    title: 'Select Image',
  };

  constructor(props) {
    super(props);
    this.state = {
      buttonTapCount: 0,
    };
  }

  _OnButtonPressed = () => {
    this.setState(state => ({buttonTapCount: state.buttonTapCount + 1}));
  };

  render() {
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
    return (
      <>
        <StatusBar barStyle={barStyle} />
        <SafeAreaView style={styles.mainViewBg} forceInset={{top: 'always'}}>
          <View style={styles.containerView}>
            <MyButton title="Select Image" onPress={this._OnButtonPressed} />
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
  containerView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40,
  },
});
