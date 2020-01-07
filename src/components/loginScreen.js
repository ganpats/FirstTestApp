import React, {Component} from 'react';
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
    drawerLabel: 'Login',
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      loginDisabled: false,
      loginTried: 0,
      username: 'user@gmail.com',
      password: '123456',
      valid_username: 'user@gmail.com',
      valid_password: '123456',
    };
  }

  _OnUsernameChange = username => {
    const disable = this.state.password === '' || username === '';
    this.setState({username, loginDisabled: disable});
  };
  _OnPasswordChange = password => {
    const disable = this.state.username === '' || password === '';
    this.setState({password, loginDisabled: disable});
  };
  _OnLoginPressed = () => {
    this.setState(state => ({loginTried: state.loginTried + 1}));

    const {valid_username, valid_password, username, password} = this.state;
    if (
      username.toLowerCase() === valid_username.toLowerCase() &&
      password === valid_password
    ) {
      // Success
      Alert.alert(
        'Sucess',
        'Login is successfull.',
        [
          {
            text: 'OK',
            //onPress: () => this.props.navigation.navigate(''),
          },
        ],
        {cancelable: false},
      );
    } else {
      // Failed
      Alert.alert(
        'Error',
        'Username and password not matched!',
        [{text: 'OK'}],
        {cancelable: true},
      );
    }
  };

  _OnForgotPasswordPressed = () => {};

  render() {
    const disabled = this.state.loginDisabled;
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
                value={this.state.username}
                onChangeText={this._OnUsernameChange}
              />
              <View style={styles.inputBaseline} />
              <Text style={styles.labelTitle}>PASSWORD</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={this._OnPasswordChange}
              />
              <View style={styles.inputBaseline} />
              <TouchableOpacity
                onPress={this._OnForgotPasswordPressed}
                style={styles.forgotPasswordView}>
                <View>
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </View>
              </TouchableOpacity>
              <MyButton
                title="LOGIN"
                onPress={this._OnLoginPressed}
                disabled={disabled}
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
