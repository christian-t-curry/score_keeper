import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import ScoreCard from './ScoreCard.js';

export default class TwoScores extends React.Component {
  goBack() {
    this.props.handleBack();
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={this.goBack.bind(this)}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
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
  },
  backButton: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 100,
    marginTop: 30,
  },
});
