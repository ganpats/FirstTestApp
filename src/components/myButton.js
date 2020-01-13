import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class MyButton extends Component {
  render() {
    const { title, disabled, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={() => onPress(title)}
        style={styles.buttonView}
        disabled={disabled}>
        <View>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonView: {
    marginTop: 2,
    marginBottom: 30,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fb5b5a',
    fontWeight: 'bold',
  },
});
