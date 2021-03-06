import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView,
  View,
  Image,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import MyButton from './myButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as common from '../constants/';

class ViewImageScreen extends Component {
  static navigationOptions = {
    drawerLabel: common.VIEW_IMAGE,
    drawerIcon: () => (
      <Ionicons
        name="ios-images"
        size={30}
        style={common.comStyles.drawerIcon}
        color="#000"
      />
    ),
  };

  componentDidMount = () => {
    this.props.navigation.setParams({ title: common.VIEW_IMAGE });
  };

  _OnAddImagePressed = () => {
    this.props.navigation.navigate('SelectImage');
  };

  _imageItem = ({ item }) => {
    const pic = { uri: item.uri };
    return (
      <TouchableOpacity style={styles.myCard}>
        <Image source={pic} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>FileName: {item.fileName}</Text>
          <Text style={styles.text}>File Size: {item.fileSize} bytes</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
    const { images } = this.props;
    const hasImages = images.length > 0;
    const buttonTitle = hasImages ? 'Add More Images' : 'Go to Add Image';
    return (
      <>
        <StatusBar barStyle={barStyle} />
        <SafeAreaView style={styles.mainViewBg}>
          <View style={styles.containerView}>
            <View style={styles.subContainerView}>
              {hasImages && (
                <FlatList
                  data={images}
                  renderItem={this._imageItem}
                  keyExtractor={item => item.fileName.toString()}
                  style={styles.flatlist}
                  horizontal={true}
                />
              )}
              <View style={styles.buttonView}>
                <MyButton
                  title={buttonTitle}
                  onPress={this._OnAddImagePressed}
                />
              </View>
            </View>
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
    justifyContent: 'center',
  },
  containerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#003f5c',
  },
  subContainerView: {
    justifyContent: 'center',
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
    marginHorizontal: 40,
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return { images: state.addImageReducer.images };
};

export default connect(mapStateToProps)(ViewImageScreen);
