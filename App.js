import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerScoreControls from './components/PlayerScoreControls.js';

import ScoreCard from './components/ScoreCard.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScoreCard
          startingScore={30}
          label="Chris"
        />
      <View style={styles.spacer}></View>
        <ScoreCard
          startingScore={30}
          label="Kinsey"
        />
      </View>
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
