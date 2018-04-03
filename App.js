import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScoreCard from './components/ScoreCard.js';
import TwoScores from './components/TwoScores.js';

export default class App extends React.Component {
  render() {
    return (
      <TwoScores />
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
