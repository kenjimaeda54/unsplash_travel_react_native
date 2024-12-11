/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppRoute from './src/route/AppRoute';
import 'react-native-gesture-handler';



export default function App() {
  return (
    <AppRoute />
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins-Black",

  }
})