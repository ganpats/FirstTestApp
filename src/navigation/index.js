import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from './../components/loginScreen';
import SelectImageScreen from './../components/selectImageScreen';
import ViewImageScreen from './../components/viewImagesScreen';
import StatisticsScreen from './../components/statisticsScreen';

const MyDrawerNavigator = createDrawerNavigator({
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

export const stackNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Drawer: { screen: MyDrawerNavigator },
});
