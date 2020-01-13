import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from './../components/loginScreen';
import SelectImageScreen from './../components/selectImageScreen';
import ViewImageScreen from './../components/viewImagesScreen';
import StatisticsScreen from './../components/statisticsScreen';
import { MyHeaderTitle } from './../components/myHeaderTitle';

const MyDrawerNavigator = createDrawerNavigator(
  {
    SelectImage: {
      screen: SelectImageScreen,
    },
    ViewImage: {
      screen: ViewImageScreen,
    },
    Statistics: {
      screen: StatisticsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routes, index } = navigation.state;
      const currentRoute = routes[index];
      const params = currentRoute.params;
      return {
        headerTitle: () => <MyHeaderTitle title={params ? params.title : ''} />,
      };
    },
  },
);

export const stackNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Drawer: { screen: MyDrawerNavigator },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fb5b5a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
    },
  },
);
