import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Platform,
  Alert,
} from 'react-native';
import MyButton from './myButton';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { addImage } from '../actions/addImage';
import { updateCount } from '../actions/updateCount';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as common from '../constants/';

class SelectImageScreen extends Component {
  static navigationOptions = {
    drawerLabel: common.SELECT_IMAGE,
    drawerIcon: () => (
      <Ionicons
        name="ios-camera"
        size={30}
        style={common.comStyles.drawerIcon}
        color="#000"
      />
    ),
  };

  componentDidMount = () => {
    this.props.navigation.setParams({ title: common.SELECT_IMAGE });
  };

  _OnButtonPressed = () => {
    const { count, updateCount } = this.props;
    updateCount(count + 1);
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
        Alert.alert('Error', response.error);
      } else {
        if (['image/jpeg', 'image/jpg', 'image/png'].includes(response.type)) {
          this.props.addImage(response);
          Alert.alert('Success!', 'Image Saved!', [{ text: 'OK' }], {
            cancelable: true,
          });
        } else {
          Alert.alert('Error', 'Please select image only!');
        }
      }
    });
  };

  _OnBackPressed = title => {
    this.props.navigation.goBack();
  };

  _OnSelectedImagePressed = () => {
    this.props.navigation.navigate('ViewImage');
  };

  render() {
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
    const { images } = this.props;
    return (
      <>
        <StatusBar barStyle={barStyle} />
        <SafeAreaView style={styles.mainViewBg}>
          {/* <MyHeader title="Select Image" onBackPress={this._OnBackPressed} /> */}
          <View style={styles.containerView}>
            <View style={styles.buttonContainer}>
              <MyButton title="Select Image" onPress={this._OnButtonPressed} />
              {images.length > 0 && (
                <MyButton
                  title="View Selected Image(s)"
                  onPress={this._OnSelectedImagePressed}
                />
              )}
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
  containerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#003f5c',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40,
    backgroundColor: '#003f5c',
  },
});

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const mapStateToProps = ({ addImageReducer, updateCountReducer }) => {
  return { images: addImageReducer.images, count: updateCountReducer.count };
};

const mapDispatchToProps = {
  addImage: uri => addImage(uri),
  updateCount: count => updateCount(count),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectImageScreen);
