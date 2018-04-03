import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScoreCard from './ScoreCard.js';

export default class TwoScores extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <ScoreCard
          startingScore={40}
          label={this.props.playerOne}
        />
      <View style={styles.spacer}></View>
        <ScoreCard
          startingScore={40}
          label={this.props.playerTwo}
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
