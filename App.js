/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import LoginScreen from './src/components/loginScreen';
import SelectImageScreen from './src/components/selectImageScreen';
import ViewImageScreen from './src/components/viewImagesScreen';
import StatisticsScreen from './src/components/statisticsScreen';

const MyDrawerNavigator = createDrawerNavigator({
  Login: {
    screen: LoginScreen,
  },
  SelectImage: {
    screen: SelectImageScreen,
  },
  ViewImage: {
    screen: ViewImageScreen,
  },
  Statistics: {
    screen: StatisticsScreen,
  },
});

export default createAppContainer(MyDrawerNavigator);
