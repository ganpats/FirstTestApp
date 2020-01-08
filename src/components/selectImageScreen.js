import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Platform, Alert} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import MyButton from './myButton';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {addImage} from './../actions/imageCount';

class SelectImageScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Select Image',
    title: 'Select Image',
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   buttonTapCount: 0,
    // };
  }

  _OnButtonPressed = () => {
    //this.setState(state => ({buttonTapCount: state.buttonTapCount + 1}));

    ImagePicker.showImagePicker(options, response => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = {uri: response.uri};
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // this.setState({
        //   avatarSource: source,
        //   filePath: response,
        //   fileData: response.data,
        //   fileUri: response.uri,
        // });
        delete response.data;
        this.props.addImage(response);

        Alert.alert('Success!', 'Image Saved!', [{text: 'OK'}], {
          cancelable: true,
        });
      }
    });
  };

  _OnSelectedImagePressed = () => {
    this.props.navigation.navigate('ViewImage');
  };
  render() {
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
    const {images} = this.props;
    return (
      <>
        <StatusBar barStyle={barStyle} />
        <SafeAreaView style={styles.mainViewBg} forceInset={{top: 'always'}}>
          <View style={styles.containerView}>
            <MyButton title="Select Image" onPress={this._OnButtonPressed} />
            {images.length > 0 && (
              <MyButton
                title="View Selected Image(s)"
                onPress={this._OnSelectedImagePressed}
              />
            )}
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

const options = {
  title: 'Select Image',
  //customButtons: [{name: 'customOptionKey', title: 'Choose Photo ...'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const mapStateToProps = state => {
  return {images: state.addImageReducer.images};
};

const mapDispatchToProps = {
  addImage: uri => addImage(uri),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectImageScreen);
