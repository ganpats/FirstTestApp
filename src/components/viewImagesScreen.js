import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Image,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';
import MyButton from './myButton';

class ViewImageScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'View Image',
  };

  _OnAddImagePressed = () => {
    this.props.navigation.navigate('SelectImage');
  };

  render() {
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
    const {images} = this.props;
    const hasImages = images.length > 0;
    const buttonTitle = hasImages ? 'Add More Images' : 'Go to Add Image';
    return (
      <>
        <StatusBar barStyle={barStyle} />
        <SafeAreaView style={styles.mainViewBg} forceInset={{top: 'always'}}>
          {hasImages && (
            <ScrollView
              style={styles.scrollView}
              horizontal={true}
              contentContainerStyle={styles.scrollContentContainer}>
              {images.map(res => {
                const pic = {uri: res.uri};
                return (
                  <View style={styles.myCard}>
                    <Image source={pic} style={styles.image} />
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>FileName: {res.fileName}</Text>
                      <Text style={styles.text}>File Size: {res.fileSize} bytes</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          )}
          <View style={styles.buttonView}>
            <MyButton title={buttonTitle} onPress={this._OnAddImagePressed} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const width = Dimensions.get('window').width - 16;
const styles = StyleSheet.create({
  mainViewBg: {
    flex: 1,
    backgroundColor: '#003f5c',
    justifyContent: 'center',
  },
  scrollView: {
    //flex: 1,
  },
  scrollContentContainer: {
    alignItems: 'center',
  },
  myCard: {
    width: width,
    marginHorizontal: 8,
    marginVertical: 12,
    borderRadius: 8,
    backgroundColor: 'steelblue',
  },
  image: {
    height: 250,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  textContainer: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  buttonView: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {images: state.addImageReducer.images};
};

export default connect(mapStateToProps)(ViewImageScreen);
