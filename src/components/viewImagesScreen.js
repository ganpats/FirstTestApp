import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

export default class ViewImageScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'View Image',
  };

  constructor(props) {
    super(props);
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
            <Text style={styles.titleText}>View Images</Text>
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
  titleText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
