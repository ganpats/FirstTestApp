import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Dimensions,
  View,
  Image,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import MyButton from './myButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { comStyle } from '../constants/';

class ViewImageScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'View Image',
    drawerIcon: () => (
      <Ionicons
        name="ios-images"
        size={30}
        style={comStyle.drawerIcon}
        color="#000"
      />
    ),
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
              <MyButton title={buttonTitle} onPress={this._OnAddImagePressed} />
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
    backgroundColor: '#003f5c',
    justifyContent: 'center',
  },
  containerView: {
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
