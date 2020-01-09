import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
  Platform,
} from 'react-native';
import MyButton from './myButton';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    //headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      loginDisabled: false,
      username: 'user@gmail.com',
      password: 'com123',
    };
  }

  _OnTextInputChange = keyName => {
    return text => {
      this.setState({ [keyName]: text }, () => {
        const disable =
          this.state.password === '' || this.state.username === '';
        this.setState({ loginDisabled: disable });
      });
    };
  };

  _OnLoginPressed = () => {
    const { username, password } = this.state;
    // Length validation
    if (username.length < 3) {
      Alert.alert('Error', 'Username must be at least 3 character long!');
      return;
    }

    // First 3 char of Password must be same as last 3 char of username
    const last3Username = username.substr(username.length - 3);
    const first3Password = password.substring(0, 3);
    if (last3Username !== first3Password) {
      Alert.alert(
        'Error',
        'First 3 character of Password must be same as last 3 character of username!',
      );
      return;
    }

    // Success
    Alert.alert(
      'Sucess',
      'Login is successfull.',
      [
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('Drawer'),
        },
      ],
      { cancelable: false },
    );
  };

  render() {
    const { loginDisabled, username, password } = this.state;
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
    return (
      <>
        <StatusBar barStyle={barStyle} />
        <SafeAreaView style={styles.mainViewBg}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.appText}>FirstTestApp</Text>
            <View style={styles.container}>
              <Text style={styles.labelTitle}>USERNAME</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your username"
                name="username"
                value={username}
                onChangeText={this._OnTextInputChange('username')}
              />
              <View style={styles.inputBaseline} />
              <Text style={styles.labelTitle}>PASSWORD</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                name="password"
                value={password}
                secureTextEntry={true}
                onChangeText={this._OnTextInputChange('password')}
              />
              <View style={styles.inputBaseline} />
              <TouchableOpacity style={styles.forgotPasswordView}>
                <View>
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </View>
              </TouchableOpacity>
              <MyButton
                title="SIGN IN"
                onPress={this._OnLoginPressed}
                disabled={loginDisabled}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainViewBg: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#003f5c',
  },
  labelTitle: {
    color: '#fb5b5a',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginTop: 16,
  },
  container: {
    flex: 1,
    marginTop: 16,
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'flex-start',
  },
  appText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30%',
    color: '#fb5b5a',
  },
  textInput: {
    textAlign: 'left',
    fontSize: 20,
    marginTop: 8,
    marginBottom: 12,
  },
  inputBaseline: {
    borderBottomColor: '#fb5b5a',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
  },
  forgotPasswordView: {
    marginTop: 12,
    height: 30,
    alignSelf: 'stretch',
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: 'white',
    fontWeight: 'bold',
  },
});
