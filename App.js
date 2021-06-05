import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';

import AppNavigator from './src/navigations/Navigator';

export default class App extends React.Component{

  render(){
    return (
      <AppNavigator/>
      );
  }
 
}