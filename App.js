import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ViewController from './components/ViewController.js';

export default class App extends React.Component {
  render() {
    return(
      <ViewController />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacer: {
    height: 20,
  }
});
