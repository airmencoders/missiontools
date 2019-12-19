/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  createAppContainer,
} from 'react-navigation';
import 'react-native-gesture-handler'
//import { createStackNavigator } from 'react-navigation-stack';

import Test from './src/Views/test'
import MTDrawerNavigator from './src/Components/Drawer'



import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

//const Drawer = createDrawerNavigator();



// export default App;
// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });
const AppNavigator = createMaterialBottomTabNavigator({
  Album: { screen: Test },
  Library: { screen: Test },
  History: { screen: Test },
  Cart: { screen: Test },
}, {
  initialRouteName: 'Album',
  activeColor: '#F44336',
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Test,
  },
  Notifications: {
    screen: Test,
  },
},
  {
    contentComponent: MTDrawerNavigator
  }
  );

export default createAppContainer(DrawerNavigator);


